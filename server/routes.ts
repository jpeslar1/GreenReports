import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema, insertBlogPostSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve blog images from the public directory
  app.use('/blog-images', express.static(path.join(process.cwd(), 'public/blog-images')));
  // Contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      return res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        data: submission
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details
        });
      }
      
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing your request"
      });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req: Request, res: Response) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      
      const subscription = await storage.createNewsletterSubscription(validatedData);
      
      return res.status(201).json({
        success: true,
        message: "Newsletter subscription successful",
        data: subscription
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details
        });
      }
      
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing your request"
      });
    }
  });

  // Get all blog posts
  app.get("/api/blog", async (req: Request, res: Response) => {
    try {
      const posts = await storage.getAllBlogPosts();
      
      return res.status(200).json({
        success: true,
        data: posts
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "An error occurred while fetching blog posts"
      });
    }
  });

  // Get a single blog post by slug
  app.get("/api/blog/:slug", async (req: Request, res: Response) => {
    try {
      const { slug } = req.params;
      const post = await storage.getBlogPostBySlug(slug);
      
      if (!post) {
        return res.status(404).json({
          success: false,
          message: "Blog post not found"
        });
      }
      
      return res.status(200).json({
        success: true,
        data: post
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "An error occurred while fetching the blog post"
      });
    }
  });

  // Create a new blog post
  app.post("/api/blog", async (req: Request, res: Response) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      
      // Check if slug already exists
      const existingPost = await storage.getBlogPostBySlug(validatedData.slug);
      if (existingPost) {
        return res.status(400).json({
          success: false,
          message: "A blog post with this slug already exists"
        });
      }
      
      const post = await storage.createBlogPost(validatedData);
      
      return res.status(201).json({
        success: true,
        message: "Blog post created successfully",
        data: post
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details
        });
      }
      
      return res.status(500).json({
        success: false,
        message: "An error occurred while creating the blog post"
      });
    }
  });

  // Update a blog post
  app.put("/api/blog/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid blog post ID"
        });
      }
      
      // Partial validation - only validate fields that are present
      const data = req.body;
      const partialSchema = insertBlogPostSchema.partial();
      const validatedData = partialSchema.parse(data);
      
      // If slug is being updated, check if it already exists
      if (validatedData.slug) {
        const existingPost = await storage.getBlogPostBySlug(validatedData.slug);
        if (existingPost && existingPost.id !== id) {
          return res.status(400).json({
            success: false,
            message: "A blog post with this slug already exists"
          });
        }
      }
      
      const updatedPost = await storage.updateBlogPost(id, validatedData);
      
      if (!updatedPost) {
        return res.status(404).json({
          success: false,
          message: "Blog post not found"
        });
      }
      
      return res.status(200).json({
        success: true,
        message: "Blog post updated successfully",
        data: updatedPost
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details
        });
      }
      
      return res.status(500).json({
        success: false,
        message: "An error occurred while updating the blog post"
      });
    }
  });

  // Delete a blog post
  app.delete("/api/blog/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid blog post ID"
        });
      }
      
      const deleted = await storage.deleteBlogPost(id);
      
      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Blog post not found"
        });
      }
      
      return res.status(200).json({
        success: true,
        message: "Blog post deleted successfully"
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "An error occurred while deleting the blog post"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

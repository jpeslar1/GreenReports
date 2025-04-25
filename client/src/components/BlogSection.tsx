import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  author: string;
  imageUrl: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
}

function BlogPostCard({ post }: { post: BlogPost }) {
  const publishedDate = new Date(post.publishedAt);
  const timeAgo = formatDistanceToNow(publishedDate, { addSuffix: true });
  
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-shadow duration-200 hover:shadow-md">
      {post.imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="flex-none">
        <div className="text-sm text-gray-500 mb-1">
          <span className="uppercase font-semibold text-primary">{post.category}</span> • {timeAgo}
        </div>
        <CardTitle className="text-xl mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors duration-200">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {post.summary}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Author section removed as requested */}
      </CardContent>
      <CardFooter className="flex-none pt-0">
        <a href="#services" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
          Read more <FaArrowRight className="ml-2 text-sm" />
        </a>
      </CardFooter>
    </Card>
  );
}

function BlogPostSkeleton() {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="h-48 bg-gray-200 animate-pulse"></div>
      <CardHeader className="flex-none">
        <div className="h-4 w-24 bg-gray-200 animate-pulse mb-2"></div>
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4 mt-1" />
      </CardHeader>
      <CardContent className="flex-grow">
        <Skeleton className="h-4 w-32" />
      </CardContent>
      <CardFooter className="flex-none pt-0">
        <Skeleton className="h-4 w-28" />
      </CardFooter>
    </Card>
  );
}

import { blogPosts } from '../data/staticData';

export default function BlogSection() {
  // Use static data instead of API query
  const posts = blogPosts;
  const isLoading = false;
  const error = null;
  
  // Display only the latest 3 posts
  const latestPosts = posts ? posts.slice(0, 3) : [];
  
  return (
    <section className="py-16 bg-white" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Sustainability Updates</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest news, insights, and trends in sustainability reporting
            and ESG practices for companies in Singapore and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {isLoading ? (
            <>
              <BlogPostSkeleton />
              <BlogPostSkeleton />
              <BlogPostSkeleton />
            </>
          ) : error ? (
            <div className="col-span-full text-center py-8">
              <p className="text-red-500 mb-2">Failed to load blog posts</p>
              <Button 
                variant="outline" 
                onClick={() => window.location.reload()}
              >
                Try Again
              </Button>
            </div>
          ) : latestPosts.length > 0 ? (
            <>
              {latestPosts.map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </>
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 mb-4">No blog posts found</p>
              <p className="text-gray-600">Check back soon for updates on sustainability and ESG reporting.</p>
            </div>
          )}
        </div>
        
        <div className="text-center">
          <a href="#services">
            <Button className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-md">
              View All Posts
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
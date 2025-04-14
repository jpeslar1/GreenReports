import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { FaCalendarAlt, FaUser, FaTag, FaArrowLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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

function BlogPostSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="flex gap-4 mb-8">
        <div className="h-5 bg-gray-200 rounded w-32"></div>
        <div className="h-5 bg-gray-200 rounded w-32"></div>
        <div className="h-5 bg-gray-200 rounded w-32"></div>
      </div>
      <div className="h-60 bg-gray-200 rounded mb-8"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
    </div>
  );
}

export default function BlogPost() {
  const [, params] = useRoute<{ slug: string }>("/blog/:slug");
  const slug = params?.slug;

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['/api/blog', slug],
    queryFn: async () => {
      if (!slug) throw new Error('No slug provided');
      
      const response = await fetch(`/api/blog/${slug}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Blog post not found');
        }
        throw new Error('Failed to fetch blog post');
      }
      
      const data = await response.json();
      return data.data as BlogPost;
    },
    enabled: !!slug
  });

  if (!slug) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navigation />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto">
              <div className="text-center py-12">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
                <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
                <Link href="/blog">
                  <Button className="bg-primary hover:bg-primary/80 text-white">
                    <FaArrowLeft className="mr-2" /> Back to Blog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog">
              <Button variant="ghost" className="mb-6 text-gray-600 hover:text-primary">
                <FaArrowLeft className="mr-2" /> Back to Blog
              </Button>
            </Link>

            {isLoading ? (
              <BlogPostSkeleton />
            ) : error ? (
              <div className="text-center py-12">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Blog Post</h1>
                <p className="text-gray-600 mb-6">We couldn't load the blog post you requested.</p>
                <Link href="/blog">
                  <Button className="bg-primary hover:bg-primary/80 text-white">
                    <FaArrowLeft className="mr-2" /> Back to Blog
                  </Button>
                </Link>
              </div>
            ) : post ? (
              <article>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-8">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-primary" />
                    <span>{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</span>
                  </div>
                  <div className="flex items-center">
                    <FaTag className="mr-2 text-primary" />
                    <span className="uppercase">{post.category}</span>
                  </div>
                </div>
                
                {post.imageUrl && (
                  <div className="mb-8">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                )}
                
                <div className="prose prose-primary max-w-none">
                  <p className="text-lg font-medium text-gray-700 mb-6">{post.summary}</p>
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
              </article>
            ) : (
              <div className="text-center py-12">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
                <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
                <Link href="/blog">
                  <Button className="bg-primary hover:bg-primary/80 text-white">
                    <FaArrowLeft className="mr-2" /> Back to Blog
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
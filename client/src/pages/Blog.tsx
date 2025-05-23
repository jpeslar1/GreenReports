import { useState } from "react";
import { Link } from "wouter";
import { formatDistanceToNow } from "date-fns";
import { FaSearch, FaTag } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "../data/staticData";
import { Helmet } from "react-helmet";

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
    <Card className="flex flex-col md:flex-row overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="w-full md:w-1/3 h-48 md:h-auto">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className={`flex flex-col w-full ${post.imageUrl ? 'md:w-2/3' : ''}`}>
        <CardHeader>
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-1">
            <span className="uppercase font-semibold text-primary">{post.category}</span>
            <span>•</span>
            <span>{timeAgo}</span>
          </div>
          <CardTitle className="text-xl md:text-2xl">
            <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors duration-200">
              {post.title}
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{post.summary}</p>
        </CardContent>
        <CardFooter className="mt-auto">
          <Link href={`/blog/${post.slug}`}>
            <Button variant="link" className="text-primary p-0 hover:text-primary/80">
              Read More
            </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
}

function BlogPostSkeleton() {
  return (
    <Card className="flex flex-col md:flex-row overflow-hidden animate-pulse">
      <div className="w-full md:w-1/3 h-48 md:h-auto bg-gray-200"></div>
      <div className="flex flex-col w-full md:w-2/3">
        <CardHeader>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-7 w-3/4 mt-2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full mt-2" />
          <Skeleton className="h-4 w-2/3 mt-2" />
        </CardContent>
        <CardFooter className="mt-auto">
          <Skeleton className="h-6 w-24" />
        </CardFooter>
      </div>
    </Card>
  );
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Use static data instead of fetching from API
  const posts = blogPosts;
  const isLoading = false;
  const error = null;
  
  // Extract unique categories from posts
  const categories = Array.from(new Set(posts.map((post: BlogPost) => post.category)));
  
  // Filter posts based on search query and selected category
  const filteredPosts = posts.filter((post: BlogPost) => {
    const matchesSearch = searchQuery 
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    const matchesCategory = selectedCategory 
      ? post.category === selectedCategory 
      : true;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Sustainability Blog | Green Reports</title>
        <meta name="description" content="Explore our latest insights, news, and updates on sustainability reporting and ESG practices for companies in Singapore." />
        <meta name="keywords" content="sustainability blog, ESG insights, Singapore sustainability, climate reporting, environmental consulting, ESG news" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sustainability Blog | Green Reports" />
        <meta property="og:description" content="Explore our latest insights, news, and updates on sustainability reporting and ESG practices for companies in Singapore." />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Sustainability Blog | Green Reports" />
        <meta property="twitter:description" content="Explore our latest insights, news, and updates on sustainability reporting and ESG practices for companies in Singapore." />
        <meta property="twitter:image" content="/og-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://greenreports.co/blog" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Green Reports Sustainability Blog",
            "description": "Explore our latest insights, news, and updates on sustainability reporting and ESG practices for companies in Singapore.",
            "url": "https://greenreports.co/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Green Reports",
              "logo": {
                "@type": "ImageObject",
                "url": "https://greenreports.co/favicon.ico"
              }
            },
            "blogPost": posts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.summary,
              "datePublished": post.publishedAt,
              "dateModified": post.updatedAt,
              "author": {
                "@type": "Organization",
                "name": "Green Reports"
              },
              "url": `https://greenreports.co/blog/${post.slug}`
            }))
          })}
        </script>
      </Helmet>

      <Header />
      <Navigation />
      
      <main className="flex-grow">
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Blog</h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Explore our latest insights, news, and updates on sustainability reporting and ESG practices
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  className={selectedCategory === null ? "bg-primary" : ""}
                >
                  All
                </Button>
                
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-primary" : ""}
                  >
                    <FaTag className="mr-1 text-xs" /> {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {isLoading ? (
                <>
                  <BlogPostSkeleton />
                  <BlogPostSkeleton />
                  <BlogPostSkeleton />
                </>
              ) : error ? (
                <div className="text-center py-12">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Failed to Load Blog Posts</h2>
                  <p className="text-gray-600 mb-6">We're having trouble fetching the blog posts. Please try again later.</p>
                  <Button 
                    onClick={() => window.location.reload()}
                    className="bg-primary hover:bg-primary/80 text-white"
                  >
                    Refresh Page
                  </Button>
                </div>
              ) : filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <BlogPostCard key={post.id} post={post} />
                ))
              ) : (
                <div className="text-center py-12">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">No Posts Found</h2>
                  <p className="text-gray-600 mb-6">
                    {searchQuery || selectedCategory
                      ? "No posts match your current filters. Try adjusting your search or category selection."
                      : "There are no blog posts available yet. Check back soon for updates!"}
                  </p>
                  {(searchQuery || selectedCategory) && (
                    <Button 
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory(null);
                      }}
                      variant="outline"
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
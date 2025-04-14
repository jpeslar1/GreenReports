import { 
  users, 
  type User, 
  type InsertUser,
  contactSubmissions,
  type ContactSubmission,
  type InsertContact,
  newsletterSubscriptions,
  type NewsletterSubscription,
  type InsertNewsletter,
  blogPosts,
  type BlogPost,
  type InsertBlogPost
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContactSubmission(submission: InsertContact): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  
  createNewsletterSubscription(subscription: InsertNewsletter): Promise<NewsletterSubscription>;
  getAllNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
  getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined>;
  
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getAllBlogPosts(): Promise<BlogPost[]>;
  updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  private blogPosts: Map<number, BlogPost>;
  
  private userId: number;
  private contactId: number;
  private newsletterId: number;
  private blogPostId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.newsletterSubscriptions = new Map();
    this.blogPosts = new Map();
    
    this.userId = 1;
    this.contactId = 1;
    this.newsletterId = 1;
    this.blogPostId = 1;

    // Initialize with our two Singapore sustainability articles
    this.initializeWithSustainabilityArticles();
  }

  // Function to pre-populate the blog with Singapore sustainability articles
  private async initializeWithSustainabilityArticles() {
    const now = new Date();
    
    // Article 1
    const article1: BlogPost = {
      id: this.blogPostId++,
      title: "Singapore Mandates Climate Disclosures for Large Companies",
      slug: "singapore-mandates-climate-disclosures",
      summary: "Singapore's ACRA and SGX RegCo have accepted mandatory climate-related disclosure requirements, with phased implementation starting in 2027 for large non-listed companies.",
      content: "<p>Singapore's Accounting and Corporate Regulatory Authority (ACRA) and Singapore Exchange Regulation (SGX RegCo) accepted the Sustainability Reporting Advisory Committee's (SRAC) climate disclosure recommendations after public consultation, with minor refinements. Singapore's Second Minister for Finance announced mandatory climate-related disclosures, phased in per the recommendations.</p><p>For large U.S.-based multinationals in Singapore, key requirements for large non-listed companies (annual revenue ≥ S$1 billion [~US$750 million] and assets ≥ S$500 million [~US$375 million], based on two prior fiscal years) include:</p><p>Mandatory climate reporting starts in fiscal 2027. ACRA will review in 2027 whether to lower thresholds, considering global trends and implementation experience.</p><p>Exemptions apply if a parent company (local or foreign) prepares climate or sustainability reports meeting Singapore's requirements or equivalent standards (e.g., European Sustainability Reporting Standards). The subsidiary's activities must be included, and the report publicly available. For reports using standards like Global Reporting Initiative or Task Force on Climate-Related Financial Disclosures, a three-year exemption (2027–2029) applies, with ACRA reviewing potential extensions.</p><p>From fiscal 2027, large non-listed companies must report International Sustainability Standards Board-aligned disclosures, including Scope 1 and 2 emissions. Scope 3 emissions reporting is deferred until at least 2029, with two years' notice. From 2029, external limited assurance on Scope 1 and 2 emissions is required from an ACRA-registered audit firm or Singapore Accreditation Council-accredited firm.</p><p>Climate reporting aligns with financial statement timelines. Companies, directors, and officers must comply with legal requirements, including record-keeping, circulating disclosures and auditor reports, filing with regulators, revising defective disclosures, and appointing competent auditors.</p>",
      author: "",
      imageUrl: "blog-images/climate-disclosures.png",
      category: "Regulations",
      publishedAt: now,
      updatedAt: now
    };
    
    // Article 2
    const article2: BlogPost = {
      id: this.blogPostId++,
      title: "Singapore-Listed Firms Progress in Climate Reporting",
      slug: "singapore-listed-firms-progress-climate-reporting",
      summary: "Singapore-listed companies have made significant progress in climate reporting, but only 28% fully meet TCFD framework requirements as mandatory reporting for all listed companies approaches in 2025.",
      content: "<p>Per The Strait Times, Singapore-listed companies have advanced in climate reporting, but only 28% fully met the Task Force on Climate-Related Financial Disclosures (TCFD) framework, a global standard for reporting climate-related impacts, risks, and opportunities.</p><p>With mandatory climate reporting for all listed companies starting in 2025, Professor Lawrence Loh of NUS Business School's Centre for Governance and Sustainability stressed the urgency of closing gaps.</p><p>A March 11 review by the Centre and Singapore Exchange Regulation (SGX RegCo) found 97% of 529 reviewed companies made at least one TCFD-aligned disclosure, up from 73% in 2023.</p><p>However, only 28% provided all 11 recommended disclosures, such as board oversight and short-, medium-, and long-term climate risks.</p><p>TCFD compliance has been mandatory for finance, agriculture, food, forest products, and energy sectors since 2023.</p><p>From 2025, all sectors must comply. Progress was notable in governance disclosures (95% in 2024 vs. 47% in 2023) and metrics/targets (92%).</p><p>Yet, fewer companies disclosed climate impacts on strategy or risk management, with under 50% integrating climate risks into broader risk frameworks.</p><p>SGX RegCo CEO Tan Boon Gin noted progress but urged better TCFD adoption to ease the transition to International Sustainability Standards Board standards.</p><p>From 2025, companies must report Scope 1 (direct) and Scope 2 (indirect, e.g., purchased electricity) emissions.</p><p>Scope 3 (value chain) emissions, reported by only 29% compared to 80% for Scope 1 and 87% for Scope 2, remain challenging.</p><p>SGX RegCo's Michael Tang said Scope 3 disclosures may start in 2026, pending review.</p><p>Prof Loh advised companies to enhance board oversight details, link climate issues to strategy, integrate risks holistically, clarify targets (e.g., base year, timeframe), and begin Scope 3 reporting with measurable metrics like business travel.</p>",
      author: "",
      imageUrl: "blog-images/listed-firms-progress.png",
      category: "ESG Reporting",
      publishedAt: now,
      updatedAt: now
    };
    
    // Add the articles to our blog posts map
    this.blogPosts.set(article1.id, article1);
    this.blogPosts.set(article2.id, article2);
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createContactSubmission(submission: InsertContact): Promise<ContactSubmission> {
    const id = this.contactId++;
    const now = new Date();
    const contactSubmission: ContactSubmission = { 
      ...submission, 
      id, 
      submittedAt: now 
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }
  
  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }
  
  async createNewsletterSubscription(subscription: InsertNewsletter): Promise<NewsletterSubscription> {
    // Check if email already exists
    const existingSubscription = await this.getNewsletterSubscriptionByEmail(subscription.email);
    if (existingSubscription) {
      return existingSubscription;
    }
    
    const id = this.newsletterId++;
    const now = new Date();
    const newsletterSubscription: NewsletterSubscription = { 
      ...subscription, 
      id, 
      subscribedAt: now 
    };
    this.newsletterSubscriptions.set(id, newsletterSubscription);
    return newsletterSubscription;
  }
  
  async getAllNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptions.values());
  }
  
  async getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined> {
    return Array.from(this.newsletterSubscriptions.values()).find(
      (subscription) => subscription.email === email,
    );
  }
  
  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = this.blogPostId++;
    const now = new Date();
    const blogPost: BlogPost = {
      ...post,
      id,
      imageUrl: post.imageUrl || '', // Use empty string as fallback
      publishedAt: now,
      updatedAt: now
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }
  
  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      (post) => post.slug === slug
    );
  }
  
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .sort((a, b) => {
        const dateA = a.publishedAt instanceof Date ? a.publishedAt : new Date(a.publishedAt);
        const dateB = b.publishedAt instanceof Date ? b.publishedAt : new Date(b.publishedAt);
        return dateB.getTime() - dateA.getTime();
      }); // Sort by most recent
  }
  
  async updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const existingPost = await this.getBlogPost(id);
    if (!existingPost) {
      return undefined;
    }
    
    const now = new Date();
    const updatedPost: BlogPost = {
      ...existingPost,
      ...post,
      updatedAt: now
    };
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }
  
  async deleteBlogPost(id: number): Promise<boolean> {
    const exists = this.blogPosts.has(id);
    if (exists) {
      this.blogPosts.delete(id);
      return true;
    }
    return false;
  }
}

export const storage = new MemStorage();

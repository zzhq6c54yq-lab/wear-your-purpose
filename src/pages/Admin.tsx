import Layout from '@/components/layout/Layout';
import ProductImageGenerator from '@/components/ProductImageGenerator';
import SEO from '@/components/SEO';

const Admin = () => {
  return (
    <Layout>
      <SEO 
        title="Admin - Product Image Generator | Thrive Apparel"
        description="Generate AI-powered product images with inspirational affirmations"
      />
      <ProductImageGenerator />
    </Layout>
  );
};

export default Admin;

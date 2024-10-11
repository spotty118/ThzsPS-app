import {
  EditOutlined,
  CodeOutlined,
  RocketOutlined,
  SafetyOutlined,
  TeamOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `AI-Powered Code Generation`,
      description: `Transform your ideas into code with our advanced GPT model, eliminating the need for extensive programming knowledge.`,
      icon: <CodeOutlined />,
    },
    {
      heading: `Rapid Prototyping`,
      description: `Bring your concepts to life in minutes, not months. Iterate and refine your applications at lightning speed.`,
      icon: <ThunderboltOutlined />,
    },
    {
      heading: `Secure Containerized Execution`,
      description: `Run your generated applications in isolated Docker containers, ensuring maximum security and scalability.`,
      icon: <SafetyOutlined />,
    },
    {
      heading: `User-Friendly Interface`,
      description: `Navigate through the entire development process with our intuitive dashboard, designed for both novices and experts.`,
      icon: <EditOutlined />,
    },
    {
      heading: `Collaborative Development`,
      description: `Share your projects, collaborate with team members, and accelerate your development workflow.`,
      icon: <TeamOutlined />,
    },
    {
      heading: `Continuous Learning`,
      description: `Our AI model evolves with each project, constantly improving to meet your development needs.`,
      icon: <RocketOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Johnson`,
      designation: `Startup Founder`,
      content: `This platform turned our startup idea into a working prototype in just days. It's revolutionized how we approach product development.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Michael Chen`,
      designation: `Product Manager`,
      content: `As a non-technical PM, I can now create and test new features without relying on our dev team. It's a game-changer for product iteration.`,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: `Emily Rodriguez`,
      designation: `Software Developer`,
      content: `I was skeptical at first, but this tool has significantly boosted my productivity. It's like having an AI pair programmer.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `David Kim`,
      designation: `Tech Entrepreneur`,
      content: `We've cut our development time by 70% and reduced costs significantly. This platform is the future of software development.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Lisa Patel`,
      designation: `UX Designer`,
      content: `The speed at which we can now prototype and test new UI concepts is incredible. It's improved our entire design process.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Alex Thompson`,
      designation: `CTO`,
      content: `This platform has allowed us to scale our development capabilities without expanding our team. It's a crucial tool for our company's growth.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Starter`,
      description: `Perfect for individuals and small projects`,
      monthly: 29,
      yearly: 290,
      features: [
        `Up to 5 projects`,
        `Basic code generation`,
        `Community support`,
      ],
    },
    {
      title: `Pro`,
      description: `Ideal for growing teams and businesses`,
      monthly: 99,
      yearly: 990,
      features: [
        `Unlimited projects`,
        `Advanced AI features`,
        `Priority support`,
        `Team collaboration`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Custom solutions for large organizations`,
      monthly: 499,
      yearly: 4990,
      features: [
        `Custom integrations`,
        `Dedicated account manager`,
        `24/7 premium support`,
        `On-premise deployment options`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does the AI-powered code generation work?`,
      answer: `Our platform uses advanced GPT models to interpret your project description and generate corresponding code. It analyzes your requirements and produces functional code based on best practices and industry standards.`,
    },
    {
      question: `Is coding knowledge required to use this platform?`,
      answer: `While coding knowledge can be beneficial, it's not necessary. Our platform is designed to be user-friendly for both non-technical users and experienced developers, allowing anyone to create functional applications.`,
    },
    {
      question: `How secure is the containerized execution environment?`,
      answer: `Our containerized execution environment uses Docker technology to provide isolated, secure spaces for each application. This ensures that your code runs in a protected environment, safeguarding your intellectual property and data.`,
    },
    {
      question: `Can I integrate the generated code with existing projects?`,
      answer: `Absolutely! The code generated by our platform follows standard practices and can be easily integrated into existing projects. We also provide options for customization and fine-tuning to meet your specific requirements.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Describe Your Vision`,
      description: `Simply input your app idea or requirements into our intuitive interface.`,
    },
    {
      heading: `AI Code Generation`,
      description: `Our GPT model analyzes your input and generates the corresponding code.`,
    },
    {
      heading: `Containerized Execution`,
      description: `The generated code is automatically deployed in secure Docker containers.`,
    },
    {
      heading: `Test and Iterate`,
      description: `Instantly test your application, make adjustments, and refine your idea in real-time.`,
    },
  ]

  const painPoints = [
    {
      emoji: `🕰️`,
      title: `Months of development time`,
    },
    {
      emoji: `💰`,
      title: `High costs of hiring developers`,
    },
    {
      emoji: `🤯`,
      title: `Overwhelming technical complexity`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Turn Your Ideas into Reality with AI-Powered App Development`}
        subtitle={`Create, deploy, and scale applications in minutes, not months. No coding experience required.`}
        buttonText={`Get Started`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/ThzsPS-app-eWu2`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText={`from happy innovators`}
          />
        }
      />
      <LandingSocialProof logos={logos} title={`Trusted by Industry Leaders`} />
      <LandingPainPoints
        title={`The Software Development Struggle: 25% Growth, 54.9% Skill Gap`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`From Concept to Application in 4 Simple Steps`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Empower Your Innovation Journey`}
        subtitle={`Discover how our AI-powered platform revolutionizes the way you build and deploy applications.`}
        features={features}
      />
      <LandingTestimonials
        title={`Success Stories: Innovators Transforming Ideas into Reality`}
        subtitle={`See how our platform is changing the game for developers, entrepreneurs, and businesses.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Innovation, Not Overhead`}
        subtitle={`Choose the plan that fits your ambition and watch your ideas come to life.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Your Questions, Answered`}
        subtitle={`Get the clarity you need to start building your next big idea.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Revolutionize Your Development Process?`}
        subtitle={`Join thousands of innovators who are already building the future with our AI-powered platform.`}
        buttonText={`Start Building Now`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}

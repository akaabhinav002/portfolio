import { motion } from "framer-motion";
import React from "react";

type Project = {
  id: number;
  title: string;
  summary: string;
  images: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "CIKITSA.ai - AI-Powered X-Ray Analysis and Medical Report Summarizer",
    summary:
      "Provides X-ray interpretations, detecting subtle abnormalities in early-stage chest conditions (thoracic region) for timely intervention and improved outcomes. Translates complex medical reports into easy-to-understand insights, empowering patients.<br>" +
      "<b>🏆 Achievements:</b><br>" +
      "- <b>2nd Runner-up</b> at Visionet's Techthon 2024.<br>" +
      "- <b>Shortlisted</b> at IISc Bangalore for the BRICS Youth Council Entrepreneurship program.",
    images: ["/chi1.jpg", "/chi2.jpg"],
  },
  {
    id: 2,
    title: "Stock Trend Prediction with Sentiment Analysis",
    summary:
      "Forecasting stock market price movements for profitable trading. Uses technical analysis and moving averages to predict trends. Also provides the latest 10 news articles on a stock ticker with positive, negative, or neutral sentiment classification.<br>" +
      "<b>🔍 Features:</b><br>" +
      "- <b>Sentiment Analysis:</b> Extracts real-time stock news and classifies sentiment.<br>" +
      "- <b>Predictive Analytics:</b> Uses LSTM learning for future price trends.<br>" +
      "- <b>Financial Insights:</b> Assists traders with data-driven decisions.",
    images: ["/stc.png", "/stc1.png"],
  },
  {
    id: 3,
    title: "Chat with Database",
    summary:
      "Developed a chat application that converts English language inputs into database queries using the Gemini API. Simplifies data retrieval and management through natural language commands.<br>" +
      "<b>💡 Key Features:</b><br>" +
      "-<b>Automated SQL Generation:</b> No manual query writing needed.<br>" +
      "-<b>Real-time Data Retrieval:</b> Fetches precise information instantly.<br>" +
      "-<b>Seamless Integration:</b> Works with multiple databases efficiently.",
    images: ["/dt.png"],
  },
  {
    id: 4,
    title: "Blog Generation with LLama2 & Crew AI",
    summary:
      "AI-driven blog generator using <b>Llama2</b> and <b>Crew AI</b>.<br><br>" +
      "<b>🤖 AI Agents:</b><br>" +
      "- <b>Researcher:</b> Gathers structured data.<br>" +
      "- <b>Content Writer:</b> Creates engaging blogs.<br>" +
      "<br>" +
      "<b>📌 Features:</b><br>" +
      "- <b>Custom Blogs:</b> Adjust word count, style and audience.<br>" +
      "- <b>Dynamic Generation:</b> Instant topic-based writing.<br>" +
      "- <b>Streamlit-Powered UI:</b> Smooth user experience.",
    images: ["/blg.png"],
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      {/* Title */}
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl z-50">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="w-screen flex-shrink-0 snap-center flex flex-col md:flex-row space-y-5 md:space-y-0 items-center justify-center p-10 md:p-20 h-screen"
          >
            
            {/* Image Section with Improved Styling for Project 2 */}
            <div
  className={`grid ${
    project.id === 2
      ? "grid-cols-1 gap-4 mt-16" // Keeps Project 2 images stacked
      : project.id === 1
      ? "grid-cols-2 gap-0" // Adjust gap for Project 1
      : "grid-cols-1"
  } justify-center`}
>
  {project.images.map((image, index) => (
    <motion.img
      key={index}
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className={`object-contain rounded-lg ${
        project.id === 1
          ? "w-[750px] md:w-[600px] xl:w-[200px] h-[250px] md:h-[300px] xl:h-[350px]" // Increased width for Project 1
          : project.id === 2
          ? "h-[200px] md:h-[250px] xl:h-[250px]" // Reduced height for Project 2
          : "h-[300px] md:h-[350px] xl:h-[400px]" // Default size for other projects
      }`}
      src={image}
      alt={`${project.title} - Image ${index + 1}`}
    />
  ))}
</div>


            {/* Text Section with Improved Spacing */}
            <div className="space-y-5 md:space-y-10 px-5 md:px-10 max-w-lg text-center md:text-left">
              <h4 className="text-lg md:text-2xl lg:text-4xl font-semibold">
                {project.title}
              </h4>

              <p
                className="text-sm md:text-md lg:text-lg text-justify leading-relaxed"
                dangerouslySetInnerHTML={{ __html: project.summary }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

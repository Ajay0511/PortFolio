"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-6 md:px-20">
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="flex flex-col items-center">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Ajay Arora
          </motion.h1>
          <p className="mt-6 text-lg md:text-xl text-slate-400">
            Backend Engineer · Java & Python · Distributed Systems
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://github.com/Ajay0511" target="_blank"><Github /></a>
            <a href="https://www.linkedin.com/in/ajay-arora-b082651a6/" target="_blank"><Linkedin /></a>
            <a href="mailto:aroraajay0511@gmail.com"><Mail /></a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto py-16">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-slate-300 leading-relaxed">
          Backend Engineer with 4 years of experience building scalable, cloud-native microservices and
          distributed systems using Java, Python, and PHP. I specialize in high-performance APIs,
          asynchronous processing, Kafka-based systems, and AWS deployments.
        </p>
      </section>

      {/* Skills */}
      {/* Skills */}
      <section className="max-w-5xl mx-auto py-16">
        <h2 className="text-2xl font-semibold mb-8">Tech Stack</h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
          <div>
            <h3 className="font-semibold mb-2">Languages</h3>
            <p>Java, Python, PHP</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Frameworks</h3>
            <p>Spring Boot, Spring Security, Spring MVC, Hibernate, FastAPI, Flask</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Cloud & DevOps</h3>
            <p>AWS (ECS, ECR, SQS, AppConfig), Docker, Bamboo, Git</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Messaging & Streaming</h3>
            <p>Apache Kafka</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Databases</h3>
            <p>MySQL, SQL Server, Aerospike, Elasticsearch</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Architecture & Concepts</h3>
            <p>Microservices, Distributed Systems, Asynchronous Processing, CI/CD</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-4xl mx-auto py-16">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <div className="space-y-6 text-slate-300">
          <div>
            <h3 className="font-semibold">Software Engineer — SHL India Pvt. Ltd</h3>
            <p className="text-sm text-slate-400">Jul 2023 – Present</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Reduced API latency by 30% using caching strategies</li>
              <li>Built asynchronous scoring microservices cutting processing time by 67%</li>
              <li>Designed Kafka-based centralized logging pipeline</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Associate Software Engineer — SHL India Pvt. Ltd</h3>
            <p className="text-sm text-slate-400">Jun 2021 – Jun 2023</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Implemented JWT-based authentication</li>
              <li>Migrated 10M+ records using multithreaded pipelines</li>
              <li>Built CI/CD pipelines reducing release cycles by 30%</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-4xl mx-auto py-16">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="space-y-4 text-slate-300">
          <div>
            <h3 className="font-semibold">Inventory Management System</h3>
            <p>JWT-secured backend with Elasticsearch-powered search and MySQL storage.</p>
          </div>
          <div>
            <h3 className="font-semibold">Sustained Attention Detection (Research)</h3>
            <p>EEG-based deep learning system published on IEEE Xplore.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Ajay Arora · Backend Engineer
      </footer>
    </div>
  );
}

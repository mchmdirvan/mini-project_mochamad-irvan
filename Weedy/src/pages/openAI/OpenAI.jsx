/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import OpenAI from "openai";
import React from "react";
import "animate.css";

import { useTitle } from "../../utils/hooks/customHooks";
import openAILogo from "../../assets/openai.webp";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import Swal from "../../utils/swal";

const configuration = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function IndexOpenAI() {
  useTitle("AI Services");

  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await configuration.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "Welcome! I'm here to make your digital wedding invitation journey special. As an AI, I can help you with heartfelt messages, suggest nearby places, provide meaningful quotes, and assist in choosing memorable dates. To get started, would you like recommendations for crafting beautiful wishes and prayers for the bride and groom? Just let me know, and we'll begin.",
          },
        ],
        model: "gpt-3.5-turbo",
      });
      setResults(response.choices);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while fetching data. Please contact our support team for assistance.",
        showCancelButton: false,
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const userMsg = {
      message: {
        content: prompt,
        role: "user",
      },
    };
    const newData = [...results, userMsg];
    setResults(newData);
    try {
      const response = await configuration.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      });
      const choice = response.choices[0];
      setResults([...newData, choice]);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while submitting data. Please contact our support team for assistance.",
        showCancelButton: false,
      });
    } finally {
      setIsLoading(false);
      setPrompt("");
    }
  };

  return (
    <>
      <div className="w-full h-[100vh] py-4 px-8 flex flex-col bg-white text-black">
        <div className="flex flex-col items-center justify-center font-outfit text-center py-10 gap-2">
          <p className="text-2xl font-semibold">AI Services</p>
          <p className="max-w-[80vw]">
            We offer an AI-powered service to assist you in creating digital
            wedding invitations. Our AI can provide suggestions for well-wishes
            to the bride and groom, recommend nearby places of interest, suggest
            meaningful quotes from holy books, and help you choose significant
            dates. <br />
            Feel free to ask us for guidance!{" "}
          </p>
        </div>

        <div className="grow flex flex-col overflow-auto">
          {results.map((result) => (
            <div
              className={`chat animate__animated animate__fadeInUp ${
                result.message.role === "assistant" ? "chat-start" : "chat-end"
              }`}
              key={result.message.content}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src={openAILogo} alt="Avatar" />
                </div>
              </div>
              <div className="chat-header capitalize">
                {result.message.role}
              </div>
              <div className="chat-bubble">{result.message.content}</div>
              <div className="chat-footer opacity-50">
                {result.message.role === "assistant" ? "Delivered" : "Seen"}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center gap-3"
        >
          <Input
            placeholder="Can you help me to create message? She is my friend since elementary school, I'm happy she will be married!"
            onChange={(event) => setPrompt(event.target.value)}
            className="w-[80vw] border-b py-4 bg-white"
            name="insertPrompt"
            id="insertPrompt"
            ariaLabel="insert-prompt"
            value={prompt}
          />
          <Button
            type="submit"
            label={
              isLoading ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : (
                "Submit"
              )
            }
            disabled={isLoading}
            className="px-5 py-4 rounded-lg"
            ariaLabel="btn-submit"
            id="btn-submit"
          />
        </form>
      </div>
    </>
  );
}

import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactRequestSchema.parse(req.body);
      
      // Create the contact request
      const contactRequest = await storage.createContactRequest(validatedData);
      
      // Log the contact request (in a real app, you might send an email notification)
      console.log('New contact request received:', {
        id: contactRequest.id,
        name: contactRequest.name,
        email: contactRequest.email,
        service: contactRequest.service,
        createdAt: contactRequest.createdAt,
      });

      res.status(201).json({
        success: true,
        message: "Contact request submitted successfully",
        id: contactRequest.id,
      });
    } catch (error) {
      console.error("Error creating contact request:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
    }
  });

  // Get all contact requests (admin endpoint)
  app.get("/api/contact-requests", async (req, res) => {
    try {
      const requests = await storage.getContactRequests();
      res.json({
        success: true,
        requests,
      });
    } catch (error) {
      console.error("Error fetching contact requests:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

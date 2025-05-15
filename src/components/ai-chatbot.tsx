
"use client";

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { MessageSquare, Send, User, Bot, X } from "lucide-react";
import { virtualAssistant, type VirtualAssistantInput, type VirtualAssistantOutput } from "@/ai/flows/virtual-assistant";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

export function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const assistantInput: VirtualAssistantInput = { query: input };
      const result: VirtualAssistantOutput = await virtualAssistant(assistantInput);
      const botMessage: Message = { id: (Date.now() + 1).toString(), text: result.response, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error calling virtual assistant:", error);
      const errorMessage: Message = { id: (Date.now() + 1).toString(), text: "Sorry, I encountered an error. Please try again.", sender: 'bot' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-xl z-50 bg-primary hover:bg-primary/90 text-primary-foreground"
        onClick={() => setIsOpen(true)}
        aria-label="Open Chatbot"
      >
        <MessageSquare size={32} />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[600px] bg-popover text-popover-foreground border-border flex flex-col h-[80vh] max-h-[700px] p-0">
          <DialogHeader className="p-6 pb-2 border-b border-border">
            <DialogTitle className="text-primary text-xl">ECS Virtual Assistant</DialogTitle>
            <DialogClose asChild>
                <Button variant="ghost" size="icon" className="absolute right-4 top-4 text-foreground hover:bg-muted">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                </Button>
            </DialogClose>
          </DialogHeader>
          
          <ScrollArea className="flex-grow p-6" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map(msg => (
                <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                  {msg.sender === 'bot' && <Bot className="w-6 h-6 text-primary flex-shrink-0" />}
                  <div className={`max-w-[75%] p-3 rounded-lg shadow ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-foreground'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  </div>
                  {msg.sender === 'user' && <User className="w-6 h-6 text-foreground flex-shrink-0" />}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-end gap-2">
                  <Bot className="w-6 h-6 text-primary flex-shrink-0" />
                  <div className="max-w-[75%] p-3 rounded-lg shadow bg-muted text-foreground">
                    <p className="text-sm italic">Typing...</p>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <DialogFooter className="p-4 border-t border-border">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about ECS Open Day..."
                className="flex-grow bg-background border-border text-foreground placeholder:text-muted-foreground focus:ring-ring"
                disabled={isLoading}
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
                <Send size={18} />
              </Button>
            </form>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

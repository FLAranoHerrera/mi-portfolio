import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "@/App";

describe("Portfolio navigation and content", () => {
  it("connects navigation and calls to action to existing sections", () => {
    render(<App />);
    for (const link of screen.getAllByRole("link")) {
      const href = link.getAttribute("href");
      if (href?.startsWith("#"))
        expect(document.getElementById(href.slice(1))).not.toBeNull();
    }
    expect(screen.getAllByRole("main")).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Software que conecta",
    );
  });
  it("closes mobile navigation with Escape and restores focus", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Abrir menú" }));
    const close = screen.getByRole("button", { name: "Cerrar menú" });
    expect(close).toHaveAttribute("aria-expanded", "true");
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveFocus();
    expect(document.getElementById("mobile-nav")).toHaveAttribute("hidden");
  });
  it("closes mobile navigation after choosing a section", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Abrir menú" }));
    fireEvent.click(
      screen.getAllByRole("link", { name: "Experiencia" }).at(-1)!,
    );
    expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
  it("provides project screenshots and repository links", () => {
    render(<App />);
    expect(screen.getAllByRole("article")).toHaveLength(3);
    for (const img of screen.getAllByRole("img")) {
      expect(img.getAttribute("src")).toMatch(/images\/projects\/.+\.jpg$/);
      expect(img).toHaveAttribute("loading", "lazy");
      expect(img.getAttribute("alt")).toMatch(/^Captura de/);
    }
    expect(screen.getAllByRole("link", { name: /Ver código de/ })).toHaveLength(
      3,
    );
  });
  it("provides CV and direct contact without a form", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: /Ver CV/ })).toHaveAttribute(
      "href",
      `${import.meta.env.BASE_URL}cv/Francisco_Arano_CV.pdf`,
    );
    expect(screen.getByRole("link", { name: /Escríbeme/ })).toHaveAttribute(
      "href",
      "mailto:aranoherrera92@gmail.com",
    );
  });
});

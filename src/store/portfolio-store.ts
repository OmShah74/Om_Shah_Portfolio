"use client";

import { create } from "zustand";

type PortfolioStore = {
  activeSection: string;
  mobileMenuOpen: boolean;
  resumeDialogOpen: boolean;
  setActiveSection: (section: string) => void;
  setMobileMenuOpen: (open: boolean) => void;
  setResumeDialogOpen: (open: boolean) => void;
};

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  activeSection: "home",
  mobileMenuOpen: false,
  resumeDialogOpen: false,
  setActiveSection: (activeSection) => set({ activeSection }),
  setMobileMenuOpen: (mobileMenuOpen) => set({ mobileMenuOpen }),
  setResumeDialogOpen: (resumeDialogOpen) => set({ resumeDialogOpen })
}));

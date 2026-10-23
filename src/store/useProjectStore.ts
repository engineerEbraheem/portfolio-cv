import { create } from 'zustand'
import { ProjectItem } from '@/config/portfolio'

interface ProjectState {
  selectedCategory: string
  searchQuery: string
  selectedProject: ProjectItem | null
  isDetailModalOpen: boolean
  setSelectedCategory: (category: string) => void
  setSearchQuery: (query: string) => void
  openProjectModal: (project: ProjectItem) => void
  closeProjectModal: () => void
}

export const useProjectStore = create<ProjectState>((set) => ({
  selectedCategory: 'All',
  searchQuery: '',
  selectedProject: null,
  isDetailModalOpen: false,

  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  openProjectModal: (project) => set({ selectedProject: project, isDetailModalOpen: true }),
  closeProjectModal: () => set({ selectedProject: null, isDetailModalOpen: false }),
}))

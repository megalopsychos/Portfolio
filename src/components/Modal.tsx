'use client'

import React from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div 
      className="fixed inset-0 bg-opacity-0 z-50 flex justify-center items-center p-4 backdrop-blur-sm shadow-lg"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg p-6 relative max-w-sm w-full"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 p-1 rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  )
} 
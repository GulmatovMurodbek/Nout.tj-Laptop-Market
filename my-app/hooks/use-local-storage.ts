"use client"

export function useLocalStorage() {
  const getItem = (key: string, defaultValue: any = null) => {
    if (typeof window === "undefined") {
      return defaultValue
    }

    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.error(`Error getting item ${key} from localStorage:`, error)
      return defaultValue
    }
  }

  const setItem = (key: string, value: any) => {
    if (typeof window === "undefined") {
      return
    }

    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error setting item ${key} in localStorage:`, error)
    }
  }

  const removeItem = (key: string) => {
    if (typeof window === "undefined") {
      return
    }

    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error(`Error removing item ${key} from localStorage:`, error)
    }
  }

  return {
    getItem,
    setItem,
    removeItem,
  }
}

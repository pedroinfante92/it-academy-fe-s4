export const fetchData = async <T>(api: string): Promise<T> => {
  
    try {
      const response = await fetch(api, {
        headers: { Accept: 'application/json' }
      })
  
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`)
      }
  
      const data: T = await response.json()
      return data
      
    } catch (error) {
      throw error
    }
  }
export async function fetchALL<Response = any>(url: string, init?: RequestInit): Promise<Response> {
  const response = await fetch(
    `https://napfix.com/api/${url}`,
    {
      ...init ?? {},
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
  
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

  return response.json()
}

export async function fetchUA<Response = any>(url: string, init?: RequestInit): Promise<Response> {
    const response = await fetch(
      `https://napfix.com/api/${url}`,
      {
        ...init ?? {},
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
    
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

    return response.json()
  }

  export async function fetchRU<Response = any>(url: string, init?: RequestInit): Promise<Response> {
    const response = await fetch(
      `https://napfix.com/api/${url}`,
      {
        ...init ?? {},
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
    
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

    return response.json()
  }
  
  
  export async function fetchEN<Response = any>(url: string, init?: RequestInit): Promise<Response> {
    const response = await fetch(
      `https://napfix.com/api/${url}`,
      {
        ...init ?? {},
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
    
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

    return response.json()
  }
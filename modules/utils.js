// export
export function formatDate(date) {
    return date.toISOString().split('T')[0];
  }
  
  // Default export
  export default function generateId() {
    return Math.floor(Math.random() * 10000);
  }
  
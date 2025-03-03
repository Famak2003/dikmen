const clearCookie = (name: string) => {
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; samesite=strict`;
};

export default clearCookie
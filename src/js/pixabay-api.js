const searchHendler = query => {
    const searchParams = new URLSearchParams({
      key: '48366152-1d9948ee92e53004e75dec4c5',
      q: query,
      per_page: 18,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
  
    return fetch(`https://pixabay.com/api/?${searchParams}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(data => data.hits);
  };
  
  export default searchHendler;
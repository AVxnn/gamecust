const sortIds = (arr: any) => {
  return arr.map((n: any, index: any) => {
    return { ...n, id: index };
  });
};

export default sortIds;

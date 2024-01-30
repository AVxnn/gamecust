const sortIds = (arr: any) => {
  console.log(arr);
  return arr.map((n: any, index: any) => {
    return { ...n, id: index };
  });
};

export default sortIds;

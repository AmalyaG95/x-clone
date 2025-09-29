'use client';

type HelloProps = {
  name?: string;
};

const Hello = ({ name }: HelloProps) => {
  return <h1>Hi {!!name ? name : 'Guest'}</h1>;
};

export default Hello;

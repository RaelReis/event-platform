import { gql, useQuery } from "@apollo/client";

const GET_LESSON_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

function App() {
  const { data } = useQuery(GET_LESSON_QUERY);

  console.log(data)

  return <h1>hello world!</h1>;
}

export default App;

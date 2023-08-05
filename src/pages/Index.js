import { Link, useLoaderData, Form } from "react-router-dom";

function Index(props) {
  // GET THE DATA FROM OUR LOADER
  const people = useLoaderData();

  return (
    <div>
        <h2>Create a Person</h2>
        <Form action="/create" method="post">
            <input type="text" name="name" placeholder="person's name"/>
            <input type="text" name="title" placeholder="person's title"/>
            <input type="text" name="image" placeholder="person's image"/>
            <input type="submit" value="Create Person"/>
        </Form>
      {people.map((person, index) => {
        return (
          <div key={person._id} className="person">
            <Link to={`/${person._id}`}>
              <h1>{person.name}</h1>
            </Link>
            <img src={person.image} alt={person.name} />
            <h3>{person.title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
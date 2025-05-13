import { useMutation } from "@tanstack/react-query";

const AddUser = () => {
  const mutation = useMutation({
    mutationFn: (newUser) => {
      return fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(newUser),
      }).then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add user");
        }
        return res.json();
      });
    },
  });

  // Check loading state
  if (mutation.isLoading) {
    return <div className="text-xl font-medium">Adding user...</div>;
  }

  // Check for error
  if (mutation.isError) {
    return (
      <div className="text-xl font-medium">
        An error occurred: {mutation.error.message}
      </div>
    );
  }

  // Success state
  if (mutation.isSuccess) {
    return <div className="text-xl font-medium">User added successfully!</div>;
  }

  // Button to trigger mutation
  return (
    <div>
      <button
        className="mt-3 cursor-pointer rounded-md bg-orange-500 px-10 py-3 font-medium text-white"
        onClick={() =>
          mutation.mutate({
            email: "John@gmail.com",
            username: "johnd",
            password: "m38rmF$",
            name: {
              firstname: "John",
              lastname: "Doe",
            },
            address: {
              city: "kilcoole",
              street: "7835 new road",
              number: 3,
              zipcode: "12926-3874",
              geolocation: {
                lat: "-37.3159",
                long: "81.1496",
              },
            },
            phone: "1-570-236-7033",
          })
        }
        type="button"
      >
        Add New User
      </button>
      
    </div>
  );
};

export default AddUser;

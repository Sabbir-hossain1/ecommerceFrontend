const [registerUser, { isLoading }] = useRegisterUserMutation();
  const [serverError, setServerError] = useState({});
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    password2: "",
    tc: false,
  });

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await registerUser(user);
    if (res.error) {
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      storeToken(res.data.token);
    }
    setUser({
      fullName: "",
      email: "",
      password: "",
      password2: "",
      tc: false,
    });
  };
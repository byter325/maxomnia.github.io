import "../styles/guides.css";
const Guides = () => {
  const guides = [
    {
      id: 1,
      title: "Some article",
      image: "https://placehold.co/400",
      text: "Lorem ipsum dolor set amit sxsssssss ssssdasdasdasdsa ssssssssssss sssssssssscvbadfasd sdasd asdasdoasjd asdjasdjkasd askdjakgalsdkj tphhkgjöf löldöaldöasf föjjähglhlfö",
      large: true,
    },
    {
      id: 2,
      title: "Some article 2",
      image: "https://placehold.co/200",
      text: "Lorem ipsum dolor set amit sxcvbadfasd asdasdoasjd asdjasdjkasd askdjakgalsdkj tphhkgjöf löldöaldöasf föjjähglhlfö Lorem ipsum dolor set amit sxcvbadfasd asdasdoasjd asdjasdjkasdaskdjakgalsdkj tphhkgjöf löldöaldöasf föjjähglhlföLorem ipsum dolor set amit sxcvbadfasd asdasdoasjd asdjasdjkasdaskdjakgalsdkj tphhkgjöf löldöaldöasf föjjähglhlfö",
      large: false,
    },
    {
      id: 3,
      title: "Some article 2",
      image: "https://placehold.co/200",
      text: "Lorem ipsum dolor set amit sxcvbadfasd asdasdoasjd asdjasdjkasd askdjakgalsdkj tphhkgjöf löldöaldöasf föjjähglhlfö Lorem ipsum dolor set amit sxcvbadfasd asdasdoasjd asdjasdjkasdaskdjakgalsdkj tphhkgjöf löldöaldöasf föjjähglhlföLorem ipsum dolor set amit sxcvbadfasd asdasdoasjd asdjasdjkasdaskdjakgalsdkj tphhkgjöf löldöaldöasf föjjähglhlfö",
      large: false,
    },
    {
      id: 3,
      title: "Some article 2",
      image: "https://placehold.co/200",
      text: "Lorem ipsum dolor set amit sxcvbadfasd asdasdoasjd asdjasdjkasd askdjakgalsdkj tphhkgjöf löldöaldöasf föjjähglhlfö Lorem ipsum dolor set amit sxcvbadfasd asdasdoasjd asdjasdjkasdaskdjakgalsdkj tphhkgjöf löldöaldöasf föjjähglhlföLorem ipsum dolor set amit sxcvbadfasd asdasdoasjd asdjasdjkasdaskdjakgalsdkj tphhkgjöf löldöaldöasf föjjähglhlfö",
      large: false,
    },
    {
      id: 3,
      title: "Some article 2",
      image: "https://placehold.co/200",
      text: "Lorem ipsum dolor set amit sxcvbadfasd asdasdoasjd asdjasdjkasd askdjakgalsdkj tphhkgjöf löldöaldöasf föjjähglhlfö Lorem ipsum dolor set amit sxcvbadfasd asdasdoasjd asdjasdjkasdaskdjakgalsdkj tphhkgjöf löldöaldöasf föjjähglhlföLorem ipsum dolor set amit sxcvbadfasd asdasdoasjd asdjasdjkasdaskdjakgalsdkj tphhkgjöf löldöaldöasf föjjähglhlfö",
      large: false,
    },
    {
      id: 1,
      title: "Some article",
      image: "https://placehold.co/400",
      text: "Lorem ipsum dolor set amit sxsssssss ssssdasdasdasdsa ssssssssssss sssssssssscvbadfasd sdasd asdasdoasjd asdjasdjkasd askdjakgalsdkj tphhkgjöf löldöaldöasf föjjähglhlfö",
      large: true,
    },
  ];

  return (
    <div id="outer-container">
      <div className="header">
        <img src="https://cdn-icons-png.flaticon.com/512/2702/2702134.png"></img>
        <div id="header-text">
          <h1>Guides</h1>
          <p>
            Here you can find guides on how to do stuff. Lorem ipsum dolor set
            amit.
          </p>
        </div>
      </div>
      <div id="articles-container">
        {/* <div id="articles-filters">
          <div>
            <h2>Filters</h2>
          </div>
          <div className="filter">
            <label>Category</label>
            <select>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <div className="filter">
            <label>Technology</label>
            <select>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div> */}
        <div id="article-grid">
          {guides.map((guide) => (
            <a
              href={"/guides/" + guide.id}
              key={`article-container-${guide.id}`}
            >
              <div
                className={
                  guide.large ? "flex-container large" : "flex-container"
                }
              >
                <div className="flex-child flex-image">
                  <img src={guide.image}></img>
                </div>
                <div className="flex-child flex-text">
                  <h1>{guide.title}</h1>
                  <p>{guide.text}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guides;

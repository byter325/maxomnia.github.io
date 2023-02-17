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
  ];

  return (
    <div id="outer-container">
      <div className="header">
        <h1>Guides</h1>
      </div>
      <div id="article-grid">
        {guides.map((guide) => (
          <a href={"/guides/"+guide.id} key={`article-container-${guide.id}`}>
            <div className={guide.large ? "flex-container large": "flex-container"}>
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
  );
};

export default Guides;



const Badges = ({list, title, color}) => {
  return (
    <div>
        <h5>{title}</h5>
        {list.map((item, index) => (
           <p key={index} className={`badge ${color} me-2 mb-3`}>{item.name}</p> 
        ))}
    </div>
  );
};

export default Badges
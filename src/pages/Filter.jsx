import styles from "./Filter.module.css";

function Filter() {
  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <h2>Filtering Exercise</h2>
        <br />
        {/* =====================  Checkbox =====================*/}
        <h3>Dairy Free</h3>
        <div className={styles.checkboxContainer}>
          {["Dairy Free", "Non Dairy Free"].map((dairyOption) => (
            <div key={dairyOption}>
              <input type="checkbox" value={dairyOption} />
              <label>{dairyOption}</label>
            </div>
          ))}
        </div><br/>

        <h3>Flavour</h3>
        <div className={styles.checkboxContainer}>
          {["Vanilla", "Chocolate", "Fruit", "Rainbow"].map((flavour) => (
            <div key={flavour}>
              <input type="checkbox" value={flavour} />
              <label>{flavour}</label>
            </div>
          ))}
        </div><br/>

        <h3>Colour</h3>
        <div className={styles.checkboxContainer}>
          {["Vanilla", "Chocolate", "Fruit", "Rainbow"].map((colour) => (
            <div key={colour}>
              <input type="checkbox" value={colour} />
              <label>{colour}</label>
            </div>
          ))}
        </div>
      </div><br/>

      {/* ================ Filtered Display Section ================*/}
      <div className={styles.pictureGallery}>
        
      </div>
    </div>
  );
}
export default Filter;

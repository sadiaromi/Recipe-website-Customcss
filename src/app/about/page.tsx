import styles from "./about.module.css"

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Tasty Recipes</h1>
      <p className={styles.description}>
        Tasty Recipes is your go-to source for delicious and diverse recipes from around the world. We are passionate
        about bringing you the best culinary experiences, from traditional Pakistani dishes to mouthwatering Chinese
        cuisine and irresistible desserts.
      </p>
      <p className={styles.description}>
        Our team of experienced chefs and food enthusiasts work tirelessly to curate and perfect each recipe, ensuring
        that you can recreate these amazing dishes in your own kitchen. Whether you&apos;re a seasoned cook or just starting
        your culinary journey, we have something for everyone.
      </p>
      <p className={styles.description}>
        Join us on this flavorful adventure and discover the joy of cooking and sharing great food with your loved ones!
      </p>
    </div>
  )
}

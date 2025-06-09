
export default function Home() {
  return (
    <div>
      
      <section className={styles.offer}>
        <div className={styles.offerContent}>
          <img src="/assets/instagram/insta4.jpg" alt="Special Offer" />
          <div className={styles.offerText}>
            <h2>Limited-Time Eid Bucket</h2>
            <button onClick={() => window.location.href='https://amrk-cloud.vercel.app/?brnid=5DPT0Z1ahax00bcGOm1p'}>
              Order Now
            </button>
          </div>
        </div>
      </section>

      <section className="instagram">
        <h2 className="sectionTitle">Our Instagram</h2>
        <div className="instaGrid">
          <a href="https://www.instagram.com/p/DHRZNWvobCl/" target="_blank"><img src="/assets/instagram/insta1.jpg" alt="Instagram 1" /></a>
          <a href="https://www.instagram.com/p/DG3nL5Socm8/" target="_blank"><img src="/assets/instagram/insta2.jpg" alt="Instagram 2" /></a>
          <a href="https://www.instagram.com/p/DKZc99WoYbB/" target="_blank"><img src="/assets/instagram/insta3.jpg" alt="Instagram 3" /></a>
          <a href="https://www.instagram.com/p/DKbulYUIKj2/" target="_blank"><img src="/assets/instagram/insta4.jpg" alt="Instagram 4" /></a>
          <a href="https://www.instagram.com/p/C9b-eH2oDqt/" target="_blank"><img src="/assets/instagram/insta5.jpg" alt="Instagram 5" /></a>
        </div>
      </section>
    </div>
  );
}

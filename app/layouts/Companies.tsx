const Companies = () => {
  return (
    <>
    <section className="companies margin">
        <div className="container">
            <h2 className="text-center">Trusted by 20,000+ companies</h2>
            <ul className="flex flex-wrap gap-24 justify-center mt-10 items-center">
                <li>
                    <img src="/mastercard.svg" alt="companies img" width={67} height={52} />
                </li>
                <li>
                    <img src="/airbnb.svg" alt="companies img" width={125} height={39} />
                </li>
                <li>
                    <img src="/uber.svg" alt="companies img" width={97} height={34} />
                </li>
                <li>
                    <img src="/paypal.svg" alt="companies img" width={106} height={37} />
                </li>
                <li>
                    <img src="/visa.svg" alt="companies img" width={90} height={32} />
                </li>
                <li>
                    <img src="/stripe.svg" alt="companies img" width={97} height={40} />
                </li>
            </ul>
        </div>
    </section>
    </>
  )
}

export default Companies
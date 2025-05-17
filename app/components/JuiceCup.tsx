"use client";

import { useState } from "react";
import styles from "./JuiceCup.module.css";
import Image from "next/image";

export default function JuiceCup() {
  const [isShaking, setIsShaking] = useState(false);
  const [text, setText] = useState("Shake the drink, make it pop..");

  const handleShake = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsShaking(!isShaking);
    setText("Sip it fast, don't let it stop.");
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`${styles.wrapper} ${isShaking ? styles.shake : ""}`}
        data-testid="juice-cup"
      >
        {/* Cup top area */}
        <div className={styles.cupCap}></div>
        <div className={styles.cupCapRing}></div>
        {/* Cup main area */}
        <div className={styles.cupMain}>
          <div className={styles.cupIngredient1}></div>
          <div className={styles.cupIngredient2}></div>
          <div className={styles.cupIngredient3}></div>
          <div className={styles.cupGloss}></div>
        </div>
        {/* Cup stroke */}
        <div className={styles.cupStroke}></div>
        <div className={styles.cupStrokeTop}></div>
        <div className={styles.cupStrokeMiddle}></div>
      </div>
      {/* Shake button */}
      <button onClick={handleShake} className={styles.btnShake}>
        <Image
          height={40}
          width={40}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATQSURBVGhD7Zl5qG9TFMevKfM8ZpaSjEnJGDITkohIZEgyT6XMswwpoqSQCElEyBwyZ8o8/EEiQ+Z5/nzWu6t7fufu333n3Ht+7/7e633r071r73P2Wee3h7X2PiNzNYdqKTgVnoRv4T/4E96GFWC20FHwHeh8iQtgqDUf3Arp8FOwFywNahOw3JdczIJh1Tago7/CARYU5FDzmuPCGlKtAjr5VVhl7Q1e8yHMa8Gw6gvQ0TXCGi+dfwe8xpdqqwVG/w5c94NO7htWWUeC1zwXVnOtB7/B5WENWOeATl4SVlkLw9fgdZtb0FBrwu/wN2xowSC1B+jgo2GVtTjcC9krO4ArXhNdBd53V1gD1IrggwyC81gwqmXhMHDoOTy8psqXcB1sBxMtAqvDX2CvrGbBIPUp6JzL8dFg7/jwdFonHodj4Sx4C7JOPodrYGsovdSd4HUO44HqHqg6Jo7tB8BeWQ7qWh/OBV+iet/1UNe2YJ3pzsC0CLwHPuhncCwfCEtAP20A9syrUH0J+R4WhKqcT8Yq69e2YBBySPiAN8CXKsm542p1KXwAVcedW6Y5+8D7o2XbQ123gHXHhNVC/qKLzvi3r3aDf8HJ7K9c1fywI1wLn0HVeYOoQ2hnqAa8i8H6s8Pq1eFgnS/dWHalD3strLJclXJ8n2ABMl4YvW+GbyAdl4/BwLYl9Ful/GG89pGweuWcss5Up5X+AVebfsoJ/gocDHeDcyQdF4fbebAxNNEy4HN/gnqc8eV/BNs1LjVWRuIlw+qVK1HV4UQnDHinwWQnZS7Nm4bVq9fBuo3CaqiclGuFNSbnTf4y4i7QuGH8WBmmqpvAdo8Iq1eZHbRKPp8Hb9oirDHl/LHOVSg3UV3J7bJtXx1WrzJdyTnZSDeANxmN6/Ih1pWC11Q10YQ/A6wzkDaWXetNdnVdptcuu05KDx26lLmVz3XJrsuesO6ysBoq99vvhjVe94H1DoUuZfDMJLMexzzksNxks7GcC2ao3riuBTWZtVr3CRj8ulTuKOtB1nMBy41TreQc8MYzwxqvzJUOCqs7mWza7p5hjWkleAh2DauF3ADZoL9Qda+R8gWsN0fqsldMa2z3+LA6kNHUlMBGd7GgJoefc8j6QyzoSCeDbZaW4EnL8ygbfSys8cpx+xF01Sv7g22a9nQmTwgzXTFbrctey7SidYrdR7mReiasDuVYteE3oXTO5DGp9a5yE22ommodsL3Wme7MpPO5C3RnV9LTYP2FYU1NZre29UtYHcuDAbPbP2ArC2raDIz2PryL5NF2fJlWKXtT5Q7O+FHSHWB964BVUK6WDrPO5XJ7JZiyl2TKb3phz7Q5USzpRfBF3FFOi84HHXgZ+m1pm+hhsJ3dw5oGeZJi/qUTpc1RU+UwdRs9bdoPdMKzqMmm+Wa4tlHaD81SPQE60irlrugi8P5+Cesskym4+3mX7MlM/NzyXhHWNMtvJjrjsVDbL095IHdjWNMsD+xMJnXodAtmooXAo9PbwW20990GQ6GdQIeM1PWjJaXzHu/ocPWYyVj0LJgxDI3yW/yDYc04bXf3Z/kPUHXeA76TYFUYOi0PeRZsoPPTQdX5F+AU8ARl6HUopPPyErgy+cFztpJ7/hPBSV+aK3M1h2lk5H9zyWMGY7HQlwAAAABJRU5ErkJggg=="
          alt="Shake icon"
        />
        SHAKE
      </button>
      <p className="text-center max-w-2xl mt-10 z-10 font-medium italic">
        {text}
      </p>
    </div>
  );
}

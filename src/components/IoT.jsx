import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-screen-xl mx-auto py-10 md:py-20 px-6 font-poppins mt-10">
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* LEFT */}
        <motion.div
          className="md:w-1/2 text-left font-semibold text-lg md:text-[24px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          {/* Badge */}
          <motion.span
            className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
          >
            {t("hero.badge")}
          </motion.span>

          {/* TITLE (MISMO ESTILO QUE INICIO H2) */}
          <motion.h1
            className="font-semibold text-4xl sm:text-5xl lg:text-[52px] leading-tight mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ amount: 0.3 }}
          >
            {t("hero.title")}{" "}
            <span className="text-green-600">
              {t("hero.title_highlight")}
            </span>
          </motion.h1>

          {/* DESCRIPTION (MISMO ESTILO QUE INICIO) */}
          <motion.p
            className="text-soft-gray mb-8 "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ amount: 0.3 }}
          >
            {t("hero.description")}
          </motion.p>

          {/* FEATURES (MISMO SISTEMA QUE INICIO) */}
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
                viewport={{ amount: 0.2 }}
              >
                <motion.img
                  src="Check.png"
                  alt="check"
                  className="w-6 h-6 mt-1 object-contain"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ amount: 0.3 }}
                />
                <p className="text-soft-gray">
                  {t(`hero.benefits.${i}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="md:w-1/2 w-full flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >

          {/* IMAGES */}
          <div className="flex items-end justify-center gap-6">
            <motion.img
              src="MobileApp.png"
              alt="app preview"
              className="w-full max-w-[150px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.3 }}
            />

            <motion.img
              src="Iot.png"
              alt="iot bottle"
              className="w-full max-w-[280px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.3 }}
            />
          </div>

          {/* CARDS */}
          <motion.div
            className="flex gap-6 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
          >
            <div className="bg-white shadow-md rounded-xl px-4 py-3 text-center">
              <p className="text-green-600 font-semibold">
                {t("hero.card1.value")}
              </p>
              <p className="text-xs text-gray-500">
                {t("hero.card1.label")}
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl px-4 py-3 text-center">
              <p className="text-green-600 font-semibold">
                {t("hero.card2.value")}
              </p>
              <p className="text-xs text-gray-500">
                {t("hero.card2.label")}
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import Content from "./../components/Accordion";

export default function Home() {
  return (
    <>
      <div className="hero">
        <h1>حين نتعارف... ماذا نسأل ؟</h1>
        <span>
          فيما يلي مجموعة من الأسلئة المساعدة في مرحلة التعارف, مأخوذة من كتاب
          &quot;نصفي الاخر&quot; للكاتب محسن عباس ولدي.
          <br /> ترجمة السيد عباس نورالدين
        </span>
      </div>
      <main>
        <Content />
      </main>
    </>
  );
}

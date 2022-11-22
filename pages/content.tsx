import ContentLayout from '/layouts/ContentLayout';

export default function Content() {
  return (
    <ContentLayout
      title='Title'
      description='Description'
      readingTime='10 minutes to read'
      tags={['Tag1', 'Tag2']}
      publishDate='2022-06-18T00:00:00'
    >
      Placeholder
    </ContentLayout>
  );
}

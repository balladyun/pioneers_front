export async function handleCopyClipBoard(text) {
  try {
    await navigator.clipboard.writeText(text);
    alert('링크가 복사되었습니다!');
  } catch (err) {
    console.log(err);
  }
}

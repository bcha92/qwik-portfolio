// Simple Function to get Total Page Height on Render // Necessary for onscroll listener triggers
export default function getPageHeight(nodes: any): number {
  let pageHeight = 0;

  for (let i = nodes.length - 1; i >= 0; i--) {
    if (nodes[i].scrollHeight && nodes[i].clientHeight) {
      pageHeight = Math.max(
        pageHeight,
        Math.max(nodes[i].scrollHeight, nodes[i].clientHeight),
      );
    }
    if (nodes[i].childNodes.length) getPageHeight(nodes[i].childNodes);
  }

  return pageHeight;
}

import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "TangramPage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "tangram",
      title: "Tangram Puzzle - Classic Shape Puzzle Game",
      shortTitle: "Tangram",
      description: "Arrange seven geometric pieces to match silhouette puzzles. Drag, rotate, and flip pieces to create shapes. A timeless Chinese puzzle game.",
      metaDescription: "Play free Tangram puzzles online. Arrange 7 geometric shapes to match silhouettes. Classic Chinese dissection puzzle with multiple difficulty levels.",
      categories: ["Puzzles", "Pattern Games", "Classic Games"],
      keywords: ["tangram", "tangram puzzle", "shape puzzle", "chinese puzzle", "geometric puzzle", "tangram online", "brain teaser"],
      initCode: "initGame();",
      faqs: [
        {
          question: "What is a Tangram puzzle?",
          answer: "Tangram is an ancient Chinese dissection puzzle consisting of seven flat pieces called tans. The objective is to arrange all seven pieces to form a specific shape shown as a silhouette, using all pieces without overlapping."
        },
        {
          question: "What are the seven Tangram pieces?",
          answer: "A traditional Tangram consists of: 2 large triangles, 1 medium triangle, 2 small triangles, 1 square, and 1 parallelogram. Together they form a square, but can create thousands of different shapes."
        },
        {
          question: "How do I rotate pieces in this game?",
          answer: "Click on a piece to select it, then press R to rotate clockwise or E to rotate counter-clockwise. You can also use the rotation buttons on screen. Pieces rotate in 45-degree increments."
        },
        {
          question: "Can I flip pieces in Tangram?",
          answer: "Only the parallelogram (pink piece) can be flipped. Select it and press F or use the Flip button. This is because the parallelogram is the only piece that has a different shape when mirrored."
        }
      ]
    };
    const breadcrumbItems = [
      { name: "Home", path: "/" },
      { name: "Games", path: "/" },
      { name: game.shortTitle || game.title, path: `/posts/${game.slug}/` }
    ];
    useGameLoader(game.slug, game.initCode);
    useGameSeo(game);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: "container py-4",
        itemscope: "",
        itemtype: "https://schema.org/VideoGame"
      }, _attrs))} data-v-c1aeb2c2>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-c1aeb2c2><h1 class="mb-2" itemprop="name" data-v-c1aeb2c2>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-c1aeb2c2>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-c1aeb2c2><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-c1aeb2c2>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-c1aeb2c2><div id="game_main_container" data-v-c1aeb2c2><div class="puzzle-info" data-v-c1aeb2c2><div class="puzzle-preview" data-v-c1aeb2c2><h3 data-v-c1aeb2c2>Target Shape</h3><canvas id="puzzleCanvas" width="200" height="200" data-v-c1aeb2c2></canvas></div><div class="puzzle-details" data-v-c1aeb2c2><h2 id="puzzleName" data-v-c1aeb2c2>Square</h2><span class="difficulty" id="puzzleDifficulty" data-v-c1aeb2c2>Easy</span><div class="stats" data-v-c1aeb2c2> Completed: <span id="completedCount" data-v-c1aeb2c2>0</span> / <span id="totalPuzzles" data-v-c1aeb2c2>10</span></div></div></div><canvas id="gameCanvas" width="500" height="500" data-v-c1aeb2c2></canvas><div class="controls" data-v-c1aeb2c2><div class="control-group" data-v-c1aeb2c2><button onclick="prevPuzzle()" class="btn-nav" title="Previous puzzle" data-v-c1aeb2c2><i class="bi bi-chevron-left" data-v-c1aeb2c2></i> Prev </button><button onclick="nextPuzzle()" class="btn-nav" title="Next puzzle" data-v-c1aeb2c2> Next <i class="bi bi-chevron-right" data-v-c1aeb2c2></i></button></div><div class="control-group" data-v-c1aeb2c2><button onclick="rotateCCW()" class="btn-rotate" title="Rotate counter-clockwise (E)" data-v-c1aeb2c2><i class="bi bi-arrow-counterclockwise" data-v-c1aeb2c2></i></button><button onclick="rotateCW()" class="btn-rotate" title="Rotate clockwise (R)" data-v-c1aeb2c2><i class="bi bi-arrow-clockwise" data-v-c1aeb2c2></i></button><button onclick="flip()" class="btn-flip" title="Flip parallelogram (F)" data-v-c1aeb2c2><i class="bi bi-symmetry-horizontal" data-v-c1aeb2c2></i> Flip </button></div><div class="control-group" data-v-c1aeb2c2><button onclick="shufflePieces()" class="btn-action" title="Shuffle all pieces" data-v-c1aeb2c2><i class="bi bi-shuffle" data-v-c1aeb2c2></i> Shuffle </button><button onclick="resetCurrentPuzzle()" class="btn-reset" title="Reset pieces" data-v-c1aeb2c2><i class="bi bi-arrow-repeat" data-v-c1aeb2c2></i> Reset </button></div><div class="control-group" data-v-c1aeb2c2><button onclick="markComplete()" class="btn-complete" title="Mark puzzle as complete" data-v-c1aeb2c2><i class="bi bi-check-lg" data-v-c1aeb2c2></i> Done </button></div></div><div class="instructions" data-v-c1aeb2c2><h4 data-v-c1aeb2c2>How to Play</h4><ul data-v-c1aeb2c2><li data-v-c1aeb2c2><strong data-v-c1aeb2c2>Drag</strong> pieces to move them into position</li><li data-v-c1aeb2c2><strong data-v-c1aeb2c2>Click a piece</strong> to select it, then use <kbd data-v-c1aeb2c2>R</kbd>/<kbd data-v-c1aeb2c2>E</kbd> to rotate</li><li data-v-c1aeb2c2><strong data-v-c1aeb2c2>Press <kbd data-v-c1aeb2c2>F</kbd></strong> to flip the parallelogram (pink piece)</li><li data-v-c1aeb2c2>Arrange all 7 pieces to match the target silhouette</li><li data-v-c1aeb2c2>Click <strong data-v-c1aeb2c2>Done</strong> when you&#39;ve completed the puzzle</li></ul></div></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-c1aeb2c2><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-c1aeb2c2><meta itemprop="applicationCategory" content="Game" data-v-c1aeb2c2><meta itemprop="operatingSystem" content="Web Browser" data-v-c1aeb2c2><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-c1aeb2c2><meta itemprop="price" content="0" data-v-c1aeb2c2><meta itemprop="priceCurrency" content="USD" data-v-c1aeb2c2></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/TangramPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TangramPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c1aeb2c2"]]);
export {
  TangramPage as default
};

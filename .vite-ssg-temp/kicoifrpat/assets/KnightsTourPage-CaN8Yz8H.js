import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "KnightsTourPage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "knights-tour",
      title: "Knight's Tour Puzzle - Chess Movement Game",
      shortTitle: "Knight's Tour",
      description: "Move a chess knight to visit every square exactly once. Classic mathematical puzzle with hints available.",
      metaDescription: "Play the Knight's Tour puzzle online. Move a chess knight to visit every square on the board exactly once. Classic Hamiltonian path puzzle.",
      categories: ["Puzzles", "Chess", "Math Games"],
      keywords: ["knights tour", "chess puzzle", "knight moves", "hamiltonian path", "chess game"],
      initCode: "initializeGame();",
      faqs: [
        {
          question: "What is the Knight's Tour?",
          answer: "A puzzle where you move a chess knight to visit every square on the board exactly once. The knight moves in an L-shape: two squares in one direction, then one square perpendicular."
        },
        {
          question: "Is there always a solution to the Knight's Tour?",
          answer: "On a standard 8x8 board, solutions exist starting from any square. Smaller boards may not have solutions from all starting positions."
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
      }, _attrs))} data-v-0c57d060>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-0c57d060><h1 class="mb-2" itemprop="name" data-v-0c57d060>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-0c57d060>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-0c57d060><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-0c57d060>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-0c57d060><div class="container" data-v-0c57d060><div class="board" id="board" data-v-0c57d060></div><div class="controls" data-v-0c57d060><button onclick="resetGame()" data-v-0c57d060>New Game</button><button onclick="showHint()" data-v-0c57d060>Show Hint</button></div><div class="status" id="status" data-v-0c57d060></div><div class="best-scores" data-v-0c57d060><h3 data-v-0c57d060>Best Scores</h3><div id="bestScores" data-v-0c57d060></div></div></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-0c57d060><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-0c57d060><meta itemprop="applicationCategory" content="Game" data-v-0c57d060><meta itemprop="operatingSystem" content="Web Browser" data-v-0c57d060><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-0c57d060><meta itemprop="price" content="0" data-v-0c57d060><meta itemprop="priceCurrency" content="USD" data-v-0c57d060></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/KnightsTourPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const KnightsTourPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0c57d060"]]);
export {
  KnightsTourPage as default
};

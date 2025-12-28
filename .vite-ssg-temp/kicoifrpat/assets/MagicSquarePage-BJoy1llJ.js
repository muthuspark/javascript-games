import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "MagicSquarePage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "magicsquare",
      title: "Magic Square Puzzle - Math Brain Game",
      shortTitle: "Magic Square",
      description: "Arrange numbers in a grid so rows, columns, and diagonals all sum to the same magic number. Great for math practice.",
      metaDescription: "Play Magic Square puzzles online. Arrange numbers so all rows, columns, and diagonals have the same sum. Fun math brain training game.",
      categories: ["Puzzles", "Math Games", "Educational"],
      keywords: ["magic square", "math puzzle", "number puzzle", "magic square solver", "math game"],
      initCode: "initGame();",
      faqs: [
        {
          question: "What is a Magic Square?",
          answer: "A Magic Square is a grid of numbers where every row, column, and diagonal adds up to the same total, called the magic constant."
        },
        {
          question: "How do you calculate the magic constant?",
          answer: "For an n×n magic square using numbers 1 to n², the magic constant is n(n²+1)/2. For a 3x3 square, it is 15."
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
      }, _attrs))} data-v-27e3e3dc>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-27e3e3dc><h1 class="mb-2" itemprop="name" data-v-27e3e3dc>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-27e3e3dc>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-27e3e3dc><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-27e3e3dc>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-27e3e3dc><div class="controls" data-v-27e3e3dc><button class="easy" onclick="setDifficulty(3)" data-v-27e3e3dc>Easy (3x3)</button><button class="medium" onclick="setDifficulty(4)" data-v-27e3e3dc>Medium (4x4)</button><button class="hard" onclick="setDifficulty(5)" data-v-27e3e3dc>Hard (5x5)</button><button class="new-game" onclick="initGame()" data-v-27e3e3dc>New Game</button><button class="hint" onclick="giveHint()" data-v-27e3e3dc>Hint</button><button class="solve" onclick="solve()" data-v-27e3e3dc>Solve</button></div><h3 data-v-27e3e3dc>Magic Sum: <span id="magic-sum" data-v-27e3e3dc>0</span></h3><div id="status" class="status" data-v-27e3e3dc></div><div class="align-center" data-v-27e3e3dc><div id="game-board" class="game-board" data-v-27e3e3dc></div></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-27e3e3dc><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-27e3e3dc><meta itemprop="applicationCategory" content="Game" data-v-27e3e3dc><meta itemprop="operatingSystem" content="Web Browser" data-v-27e3e3dc><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-27e3e3dc><meta itemprop="price" content="0" data-v-27e3e3dc><meta itemprop="priceCurrency" content="USD" data-v-27e3e3dc></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/MagicSquarePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MagicSquarePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-27e3e3dc"]]);
export {
  MagicSquarePage as default
};

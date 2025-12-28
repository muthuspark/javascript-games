import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "WordSearchPage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "word-search",
      title: "Word Search Puzzle - Find Hidden Words",
      shortTitle: "Word Search",
      description: "Find hidden words in a grid of letters. Words can be horizontal, vertical, diagonal, or backwards. Multiple categories and grid sizes.",
      metaDescription: "Play free word search puzzles online. Find hidden words in letter grids with multiple categories. Great for vocabulary and brain training.",
      categories: ["Puzzles", "Word Games", "Educational"],
      keywords: ["word search", "word find", "word puzzle", "hidden words", "word search puzzle"],
      initCode: "const game = new WordSearchGame(); game.newGame();",
      faqs: [
        {
          question: "How do you play Word Search?",
          answer: "Find words from the list hidden in the letter grid. Words can go horizontally, vertically, diagonally, and even backwards. Click and drag to select."
        },
        {
          question: "Are word searches good for your brain?",
          answer: "Yes! Word searches improve vocabulary, pattern recognition, and concentration. They are great for all ages."
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
      }, _attrs))} data-v-4b3d3ef0>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-4b3d3ef0><h1 class="mb-2" itemprop="name" data-v-4b3d3ef0>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-4b3d3ef0>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-4b3d3ef0><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-4b3d3ef0>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-4b3d3ef0><div class="game-container" data-v-4b3d3ef0><div id="grid" class="grid" data-v-4b3d3ef0></div><hr data-v-4b3d3ef0><div class="optiongrid" data-v-4b3d3ef0><div class="label" data-v-4b3d3ef0>Words to find:</div><div data-v-4b3d3ef0><div id="wordList" class="word-list" data-v-4b3d3ef0></div></div></div><hr data-v-4b3d3ef0><div class="optiongrid" data-v-4b3d3ef0><div class="label" data-v-4b3d3ef0>Grid Size:</div><div data-v-4b3d3ef0><div id="gridSize" class="grid-size" data-v-4b3d3ef0></div></div></div><hr data-v-4b3d3ef0><div class="optiongrid" data-v-4b3d3ef0><div class="label" data-v-4b3d3ef0>Category:</div><div data-v-4b3d3ef0><div id="categoryButtons" data-v-4b3d3ef0></div></div></div><div id="toast" data-v-4b3d3ef0></div></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-4b3d3ef0><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-4b3d3ef0><meta itemprop="applicationCategory" content="Game" data-v-4b3d3ef0><meta itemprop="operatingSystem" content="Web Browser" data-v-4b3d3ef0><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-4b3d3ef0><meta itemprop="price" content="0" data-v-4b3d3ef0><meta itemprop="priceCurrency" content="USD" data-v-4b3d3ef0></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/WordSearchPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WordSearchPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4b3d3ef0"]]);
export {
  WordSearchPage as default
};

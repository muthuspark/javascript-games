import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "MazePage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "maze",
      title: "Maze Game Online - Navigate Through Puzzles",
      shortTitle: "Maze Game",
      description: "Navigate through randomly generated mazes using keyboard controls. Choose from 10x10 to 90x90 grid sizes for varying difficulty levels.",
      metaDescription: "Play free online maze games with adjustable difficulty. Navigate through randomly generated mazes from 10x10 to 90x90. Use arrow keys or WASD to play.",
      categories: ["Puzzles", "Navigation Games"],
      keywords: ["maze game", "online maze", "puzzle maze", "labyrinth game", "maze solver"],
      initCode: "generateNewMaze();",
      faqs: [
        {
          question: "How do you play the maze game?",
          answer: "Use arrow keys or WASD to move the red square through the maze. Navigate from the start to the green exit point to win."
        },
        {
          question: "What maze sizes are available?",
          answer: "Choose from 10x10 up to 90x90 grid sizes. Larger mazes are more challenging and take longer to solve."
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
      }, _attrs))} data-v-41fd38f7>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-41fd38f7><h1 class="mb-2" itemprop="name" data-v-41fd38f7>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-41fd38f7>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-41fd38f7><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-41fd38f7>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-41fd38f7><div class="maze" data-v-41fd38f7><div class="game-container" data-v-41fd38f7><div class="controls" data-v-41fd38f7><select id="mazeSize" data-v-41fd38f7><option value="11" data-v-41fd38f7>10x10</option><option value="21" data-v-41fd38f7>20x20</option><option value="31" data-v-41fd38f7>30X30</option><option value="41" data-v-41fd38f7>40X40</option><option value="51" data-v-41fd38f7>50X50</option><option value="61" data-v-41fd38f7>60X60</option><option value="71" data-v-41fd38f7>70X70</option><option value="81" data-v-41fd38f7>80X80</option><option value="91" data-v-41fd38f7>90X90</option></select><button onclick="generateNewMaze()" data-v-41fd38f7>Generate Maze</button><button onclick="resetPlayer()" data-v-41fd38f7>Reset Player</button></div><canvas id="mazeCanvas" data-v-41fd38f7></canvas></div></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-41fd38f7><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-41fd38f7><meta itemprop="applicationCategory" content="Game" data-v-41fd38f7><meta itemprop="operatingSystem" content="Web Browser" data-v-41fd38f7><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-41fd38f7><meta itemprop="price" content="0" data-v-41fd38f7><meta itemprop="priceCurrency" content="USD" data-v-41fd38f7></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/MazePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MazePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-41fd38f7"]]);
export {
  MazePage as default
};

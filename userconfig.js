// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = macchiato;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Fairfax",
    scale: "C",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "UA",
      timezone: "Europe/Kyiv",
      format: "h:i",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
  },
  keybindings: {
    s: "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.perplexity.ai",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/banner_09.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: palette.green,
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "outlook",
              url: "https://outlook.office.com/mail/",
              icon: "inbox",
              icon_color: palette.peach,
            },
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "sheets",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "hacker-news",
              url: "https://news.ycombinator.com/ask",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "google news",
              url: "https://news.google.com",
              icon: "badge-filled",
              icon_color: palette.peach,
            },
            {
              name: "虎嗅",
              url: "https://www.huxiu.com/",
              icon: "border-radius",
              icon_color: palette.red,
            },
            {
              name: "The Verge",
              url: "https://www.theverge.com",
              icon: "eye-bolt",
              icon_color: palette.blue,
            },
            {
              name: "WIRED",
              url: "https://www.wired.com",
              icon: "home-2",
              icon_color: palette.mauve,
            },
            {
              name: "linkedin",
              url: "https://www.linkedin.com/",
              icon: "brand-linkedin",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_07.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "neptune",
              url: "https://ui.neptune.ai",
              icon: "circle-triangle",
              icon_color: palette.peach,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
            {
              name: "dev-community",
              url: "https://dev.to/",
              icon: "article",
              icon_color: palette.peach,
            },
            {
              name: "wakatime",
              url: "https://wakatime.com",
              icon: "24-hours",
              icon_color: palette.red,
            },
            {
              name: "dotfyle",
              url: "https://dotfyle.com/",
              icon: "puzzle",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "dou",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "uber engineering",
              url: "https://www.uber.com/en-GB/blog/london/engineering",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "netflix tech blog",
              url: "https://netflixtechblog.com",
              icon: "brand-netflix",
              icon_color: palette.blue,
            },
            {
              name: "w3schools",
              url: "https://www.w3schools.com/",
              icon: "school",
              icon_color: palette.red,
            },
            {
              name: "exercism",
              url: "https://exercism.org/",
              icon: "calculator",
              icon_color: palette.blue,
            },
            {
              name: "regex101",
              url: "https://regex101.com/",
              icon: "regex",
              icon_color: palette.green,
            },
            {
              name: "hoopscotch",
              url: "https://hoppscotch.io/",
              icon: "api",
              icon_color: palette.peach,
            },
            {
              name: "searchcode",
              url: "https://searchcode.com/",
              icon: "zoom-code",
              icon_color: palette.red,
            },
            {
              name: "codepen",
              url: "https://codepen.io/",
              icon: "brand-codepen",
              icon_color: palette.blue,
            },
            {
              name: "readme.so",
              url: "https://readme.so/editor",
              icon: "book-2",
              icon_color: palette.mauve,
            },
            {
              name: "postgres-new",
              url: "https://postgres.new/",
              icon: "database",
              icon_color: palette.sky,
            },
            {
              name: "penpot",
              url: "https://penpot.app/",
              icon: "edit-circle",
              icon_color: palette.lavender,
            },
            {
              name: "jsoncrack",
              url: "https://jsoncrack.com/editor",
              icon: "info-square-rounded",
              icon_color: palette.flamingo,
            },
            {
              name: "it-tools",
              url: "https://it-tools.tech/",
              icon: "tools",
              icon_color: palette.pink,
            },
            {
              name: "devdocs",
              url: "https://devdocs.io/",
              icon: "books",
              icon_color: palette.green,
            },
            {
              name: "mdn",
              url: "https://developer.mozilla.org/en-US/",
              icon: "brand-firefox",
              icon_color: palette.peach,
            },
            {
              name: "cheatsheets",
              url: "https://cheatsheets.zip/",
              icon: "file-spreadsheet",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
            {
              name: "mastodon",
              url: "https://mastodon.social",
              icon: "brand-mastodon",
              icon_color: palette.green,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
            {
              name: "twitch",
              url: "https://www.twitch.tv/",
              icon: "brand-twitch",
              icon_color: palette.blue,
            },
            {
              name: "lemmy",
              url: "https://lemmy.ml/",
              icon: "users",
              icon_color: palette.sky,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "IGN",
              url: "https://www.ign.com/account/playlist/library",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
            {
              name: "gog",
              url: "https://www.gog.com",
              icon: "brand-appgallery",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: palette.red,
            },
            {
              name: "kyivstar",
              url: "https://tv.kyivstar.ua",
              icon: "star-filled",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "music",
      background_url: "src/img/banners/banner_03.gif",
      categories: [
        {
          name: "listen",
          links: [
            {
              name: "spotify",
              url: "https://open.spotify.com",
              icon: "brand-spotify",
              icon_color: palette.green,
            },
            {
              name: "soundcloud",
              url: "https://www.soundcloud.com",
              icon: "brand-soundcloud",
              icon_color: palette.peach,
            },
            {
              name: "youtube-music",
              url: "https://music.youtube.com/",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "tidal",
              url: "https://listen.tidal.com/",
              icon: "brand-tidal",
              icon_color: palette.blue,
            },
            {
              name: "genius",
              url: "https://genius.com/",
              icon: "abc",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "rating/tracking",
          links: [
            {
              name: "AOTY",
              url: "https://www.albumoftheyear.org/",
              icon: "calendar-time",
              icon_color: palette.green,
            },
            {
              name: "rateyourmusic",
              url: "https://rateyourmusic.com/",
              icon: "stars-off",
              icon_color: palette.peach,
            },
            {
              name: "lastfm",
              url: "https://www.last.fm",
              icon: "brand-lastfm",
              icon_color: palette.red,
            },
            {
              name: "listenbrainz",
              url: "https://listenbrainz.org",
              icon: "ear",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "discussion",
          links: [
            {
              name: "r/musicproduction",
              url: "https://www.reddit.com/r/musicproduction/",
              icon: "device-speaker",
              icon_color: palette.green,
            },
            {
              name: "r/hiphopheads",
              url: "https://www.reddit.com/r/hiphopheads/",
              icon: "headphones",
              icon_color: palette.peach,
            },
            {
              name: "r/audiophile",
              url: "https://www.reddit.com/r/audiophile/",
              icon: "ear",
              icon_color: palette.red,
            },
            {
              name: "r/music",
              url: "https://www.reddit.com/r/music/",
              icon: "music-heart",
              icon_color: palette.blue,
            },
            {
              name: "r/metal",
              url: "https://www.reddit.com/r/metal/",
              icon: "guitar-pick",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "freesound",
              url: "https://freesound.org/",
              icon: "volume",
              icon_color: palette.green,
            },
            {
              name: "pluginboutique",
              url: "https://www.pluginboutique.com/",
              icon: "building-store",
              icon_color: palette.peach,
            },
            {
              name: "pianobook",
              url: "https://www.pianobook.co.uk",
              icon: "piano",
              icon_color: palette.red,
            },
            {
              name: "musescore",
              url: "https://musescore.com/",
              icon: "numbers",
              icon_color: palette.blue,
            },
            {
              name: "songsterr",
              url: "https://www.songsterr.com/",
              icon: "vinyl",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "tools",
      background_url: "src/img/banners/banner_17.gif",
      categories: [
        {
          name: "piracy",
          links: [
            {
              name: "fmhy",
              url: "https://fmhy.net/",
              icon: "barrier-block",
              icon_color: palette.green,
            },
            {
              name: "megathread",
              url: "https://rentry.org/megathread",
              icon: "skull",
              icon_color: palette.peach,
            },

            {
              name: "mobilism",
              url: "https://forum.mobilism.me/",
              icon: "device-mobile",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "privacy",
          links: [
            {
              name: "adblock-test",
              url: "https://d3ward.github.io/toolz/adblock.html",
              icon: "lock-access",
              icon_color: palette.green,
            },
            {
              name: "privacy-guides",
              url: "https://www.privacyguides.org/en/",
              icon: "arrow-guide",
              icon_color: palette.peach,
            },
            {
              name: "r/privacy",
              url: "https://www.reddit.com/r/privacy/",
              icon: "door-off",
              icon_color: palette.red,
            },
            {
              name: "guerrilla-mail",
              url: "https://www.guerrillamail.com",
              icon: "trash",
              icon_color: palette.blue,
            },
            {
              name: "cleanurl",
              url: "https://12ft.io/",
              icon: "spray",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "security",
          links: [
            {
              name: "cybersecurity-guide",
              url: "https://s0cm0nkey.gitbook.io/s0cm0nkeys-security-reference-guide",
              icon: "fingerprint",
              icon_color: palette.green,
            },
            {
              name: "virus-total",
              url: "https://www.virustotal.com",
              icon: "virus-search",
              icon_color: palette.peach,
            },
            {
              name: "hackthebox",
              url: "https://www.hackthebox.com/",
              icon: "biohazard",
              icon_color: palette.red,
            },
            {
              name: "triage",
              url: "https://tria.ge/",
              icon: "dna-2",
              icon_color: palette.blue,
            },
            {
              name: "cyberchef",
              url: "https://gchq.github.io/CyberChef/",
              icon: "chef-hat",
              icon_color: palette.mauve,
            },
            {
              name: "web-check",
              url: "https://web-check.xyz/",
              icon: "search",
              icon_color: palette.sky,
            },
          ],
        },
        {
          name: "ai",
          links: [
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "brand-openai",
              icon_color: palette.green,
            },
            {
              name: "huggingface",
              url: "https://huggingface.co/",
              icon: "robot",
              icon_color: palette.peach,
            },
            {
              name: "open-webui",
              url: "http://127.0.0.1:8080/",
              icon: "message-chatbot",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "art",
      background_url: "src/img/banners/banner_05.gif",
      categories: [
        {
          name: "media",
          links: [
            {
              name: "unsplash",
              url: "https://unsplash.com",
              icon: "brand-unsplash",
              icon_color: palette.green,
            },
            {
              name: "pixiv",
              url: "https://www.pixiv.net/en/",
              icon: "artboard",
              icon_color: palette.peach,
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.com/",
              icon: "brand-pinterest",
              icon_color: palette.red,
            },
            {
              name: "artstation",
              url: "https://www.artstation.com",
              icon: "pencil-heart",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "palettes",
          links: [
            {
              name: "catppuccin",
              url: "https://catppuccin.com/",
              icon: "heart",
              icon_color: palette.green,
            },
            {
              name: "nord",
              url: "https://www.nordtheme.com/",
              icon: "brand-nord-vpn",
              icon_color: palette.peach,
            },
            {
              name: "dracula",
              url: "https://draculatheme.com/",
              icon: "bat",
              icon_color: palette.red,
            },
            {
              name: "rose-pine",
              url: "https://rosepinetheme.com/",
              icon: "flower",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "tools",
          links: [
            {
              name: "convert-image-palette",
              url: "https://farbenfroh.io/",
              icon: "adjustments",
              icon_color: palette.green,
            },
            {
              name: "excalidraw",
              url: "https://excalidraw.com/",
              icon: "pencil",
              icon_color: palette.peach,
            },
            {
              name: "squoosh",
              url: "https://squoosh.app/",
              icon: "aspect-ratio",
              icon_color: palette.red,
            },
            {
              name: "palette-generator",
              url: "https://colpat.itsvg.in/dashboard",
              icon: "palette",
              icon_color: palette.blue,
            },
            {
              name: "color-picker",
              url: "https://htmlcolorcodes.com/color-picker/",
              icon: "color-picker",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "other",
      background_url: "src/img/banners/banner_01.gif",
      categories: [
        {
          name: "general",
          links: [
            {
              name: "alternative-to",
              url: "https://alternativeto.net/",
              icon: "box-multiple",
              icon_color: palette.green,
            },
            {
              name: "deepl",
              url: "https://www.deepl.com",
              icon: "language",
              icon_color: palette.peach,
            },
            {
              name: "monkeytype",
              url: "https://monkeytype.com/",
              icon: "keyboard",
              icon_color: palette.red,
            },
            {
              name: "dub",
              url: "https://dub.co/",
              icon: "external-link",
              icon_color: palette.blue,
            },
            {
              name: "speed-test",
              url: "https://librespeed.org/",
              icon: "brand-speedtest",
              icon_color: palette.mauve,
            },
            {
              name: ".to",
              url: "https://rentry.co/tosites",
              icon: "arrow-loop-right",
              icon_color: palette.sky,
            },
            {
              name: "cloudconvert",
              url: "https://cloudconvert.com/",
              icon: "transform",
              icon_color: palette.lavender,
            },
            {
              name: "is-it-down",
              url: "https://downforeveryoneorjustme.com/",
              icon: "server-off",
              icon_color: palette.flamingo,
            },
            {
              name: "selfh.st",
              url: "https://selfh.st/",
              icon: "server-2",
              icon_color: palette.pink,
            },
          ],
        },
      ]
    }
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);

import { BaseBlogPost } from "../types";

// Separate interfaces for HTML and CSS blog posts
export interface HtmlBlogPost extends BaseBlogPost {
  htmlSpecificField?: string;
}

export interface CssBlogPost extends BaseBlogPost {
  cssSpecificField?: string;
}

// HTML Blog Posts Data
export const htmlBlogPosts: HtmlBlogPost[] = [
  {
    id: 1,
    title: 'Top 10 extension "đỉnh của chóp" cho visual studio code',
    slug: "top-extension-hữu-ích-cho-lập-trình-viên ",
    excerpt:
      "Visual Studio Code là phần mềm soạn thảo code mã nguồn mở được phát triển bởi Microsoft, sử dụng để xây dựng các website, ứng dụng hoàn toàn miễn phí.",
    content: `
        <h2 class="text-blue-500 text-2xl font-bold">1. CSS Peek</h2>
        <img src="/public/images/css-peek-exten-item-1.jpg" class="w-[90%] h-auto object-cover mx-auto py-2 rounded"/>
        <p class="dark:text-white">- CSS Peek là plugin tuyệt vời để sử dụng với VSCode. CSS Peek giúp mọi người di chuyển nhanh chóng đến nơi định nghĩa các class và id của css.</br>
        - Chỉ cần nhấp chuột phải vào một selector và chọn <strong>Go to Definition</strong> Peek sẽ chuyển bạn đến đúng file vị trí và class và id đó được định nghĩa.</p>
        </br>
        <h2 class="text-blue-500 text-2xl font-bold">2. Prettier</h2>
        <img src="/public/images/prettier-exten-item-2.jpg" class="w-[90%] h-auto object-cover mx-auto py-2 rounded"/>
        <p class="dark:text-white">- Prettier giúp người dùng tạo ra format, tiến hành sắp xếp code trong các dòng code một cách hiệu quả.</br>
        - Prettier sẽ giúp mọi người <strong>"đồng bộ hoá"</strong> công việc một cách hiệu quả trong quá trình làm việc nhóm, nó sẽ tự động áp dụng định dạng toàn bộ các file JS và CSS cho kết quả làm việc của cả nhóm.</p>
        </br>
        <h2 class="text-blue-500 text-2xl font-bold">3. Auto Close Tag</h2>
        <img src="/public/images/auto-close-tag-item-3.jpg" class="w-[90%] h-[400px] object-cover mx-auto py-2 rounded"/>
        <p class="dark:text-white">- Auto Close Tag là một extension dành cho Visual Studio Code (VS Code), giúp bạn tự động đóng các thẻ HTML, XML khi bạn nhập một thẻ mở.</br>
        - Tự động đóng thẻ: Khi bạn nhập một thẻ mở như, VS Code sẽ tự động tạo thẻ đóng tương ứng.</br>
        <strong>Lưu ý:</strong> VS Code phiên bản mới đã tích hợp sẵn tính năng tự động đóng thẻ, nên bạn có thể không cần cài extension này nữa.
        </p>
        </br>
        <h2 class="text-blue-500 text-2xl font-bold">4. Auto Rename Tag</h2>
        <img src="/public/images/auto-rename-tag-exten-item-4.jpg" class="w-[90%] h-auto object-cover mx-auto py-2 rounded"/>
        <p class="dark:text-white">- Auto Rename Tag là một extension hữu ích trong Visual Studio Code (VS Code), giúp bạn tự động đổi tên thẻ đóng khi chỉnh sửa thẻ mở và ngược lại. Hỗ trợ HTML, XML, JSX, Vue, PHP,...</br>
        - Khi bạn chỉnh sửa tên thẻ mở (ví dụ: đổi &lt;div&gt; thành &lt;section&gt;), thẻ đóng &lt;/div&gt; cũng tự động thay đổi thành &lt;/section&gt;.
        </br>
        <strong>Lưu ý:</strong> Extension này chỉ đổi tên thẻ khi bạn chỉnh sửa thẻ mở hoặc thẻ đóng – không tự động tạo thẻ.</br>
        <strong>Tip: </strong> Nếu bạn dùng Emmet, hãy kết hợp với Auto Close Tag để tăng tốc độ viết code hơn nữa!</p>
        </br>
        <h2 class="text-blue-500 text-2xl font-bold">5. CodeSnap</h2>
        <img src="/public/images/code-snap-exten-item-5.jpg" class="w-[90%] h-auto object-cover mx-auto py-2 rounded"/>
        <p class="dark:text-white">- CodeSnap là một extension dành cho Visual Studio Code (VS Code) giúp bạn chụp ảnh code đẹp ngay trong trình soạn thảo.</p>
        <strong class="dark:text-white">- Tính năng chính:</strong></br>
        <ul class="list-disc pl-5 dark:text-white">
          <li>Chụp ảnh code với giao diện đẹp, có màu sắc syntax highlight.</li></br>
          <li>Hỗ trợ tuỳ chỉnh font, nền, padding, bo góc, shadow,...</li></br>
          <li>Có thể copy ảnh vào clipboard hoặc lưu dưới dạng file PNG.</li></br>
          <li>Dễ dàng chụp một phần code cụ thể hoặc toàn bộ file.</li></br>
        </ul>
        <strong class="dark:text-white">- Cách sử dụng:</strong></br>
        <ul class="list-decimal pl-5 dark:text-white">
          <li>Bôi đen đoạn code bạn muốn chụp.</li></br>
          <li>Nhấn Ctrl + Shift + P (mở Command Palette).</li></br>
          <li>Gõ "CodeSnap" → chọn Start CodeSnap.</li></br>
          <li>Tinh chỉnh ảnh theo ý thích, rồi lưu ảnh hoặc copy vào clipboard.</li></br>
        </ul>
        <p class="dark:text-white">
        <strong>Lưu ý:</strong> CodeSnap không hỗ trợ xuất ảnh GIF, chỉ PNG.
        </p>
        </br>
        <h2 class="text-blue-500 text-2xl font-bold">6. ESLint</h2>
        <img src="/public/images/eslint-extent-item-6.jpg" class="w-[90%] h-auto object-cover mx-auto py-2 rounded"/>
        <p class="dark:text-white">- ESLint là một extension phổ biến dành cho Visual Studio Code (VS Code), giúp bạn kiểm tra lỗi và format code tự động theo quy tắc chuẩn trong JavaScript, TypeScript, React,...</p>
        <strong class="dark:text-white">- Tính năng chính:</strong></br>
        <ul class="list-disc pl-5 dark:text-white">
          <li>Phát hiện lỗi cú pháp & lỗi code theo quy tắc chuẩn.</li></br>
          <li>Tự động sửa lỗi code (Fix on Save).</li></br>
          <li>Hỗ trợ JavaScript, TypeScript, JSX, TSX, Vue,....</li></br>
          <li>Tích hợp với Prettier để format code đẹp hơn.</li></br>
        </ul>
        <p class="dark:text-white">
        <strong>Lưu ý:</strong></br>- Nếu ESLint không hoạt động, hãy kiểm tra xem file .eslintrc.json có bị lỗi cú pháp không.</br>
        - Nếu dùng TypeScript, bạn cần cài thêm @typescript-eslint/parser và @typescript-eslint/eslint-plugin.
        </p>
        </br>
         <h2 class="text-blue-500 text-2xl font-bold">7. HTML Tag Wrap</h2>
         <img src="/public/images/htmltagwrap-exten-item-7.jpg" class="w-[90%] h-auto object-cover mx-auto py-2 rounded"/>
         <p class="dark:text-white">- HTML Tag Wrap là một extension hữu ích dành cho Visual Studio Code (VS Code), giúp bạn bọc một đoạn code bằng thẻ HTML chỉ với một phím tắt.</p>
         <strong class="dark:text-white">- Tính năng chính:</strong></br>
        <ul class="list-disc pl-5 dark:text-white">
          <li>Nhanh chóng bọc nội dung đã chọn vào thẻ HTML.</li></br>
          <li>Hỗ trợ nhiều ngôn ngữ: HTML, JSX, Vue, XML...</li></br>
        </ul>
         <strong class="dark:text-white">- Cách sử dụng:</strong></br>
        <ul class="list-decimal pl-5 dark:text-white">
          <li>Chọn đoạn code bạn muốn bọc.</li></br>
          <li>Nhấn Alt + W (Windows) hoặc Option + W (Mac).</li></br>
          <li>Nhập tên thẻ HTML muốn bọc (ví dụ: div, span, section...).</li></br>
          <li>Nhấn Enter → Nội dung sẽ được bọc ngay lập tức!</li></br>
        </ul>
        <p class="dark:text-white">
        <strong>Lưu ý:</strong></br>- Nếu bạn chọn nhiều dòng, extension sẽ tự động bọc tất cả nội dung đã chọn.</br>- Nếu bọc nhầm thẻ, chỉ cần nhấn Ctrl + Z (Undo) để quay lại.
        </p>
        </br>
        <h2 class="text-blue-500 text-2xl font-bold">8. GitHub Copilot</h2>
         <img src="/public/images/github-copilot-exten-item-8.jpg" class="w-[90%] h-auto object-cover mx-auto py-2 rounded"/>
         <p class="dark:text-white">- GitHub Copilot là một extension AI mạnh mẽ dành cho Visual Studio Code (VS Code), giúp bạn tự động gợi ý code, hoàn thành dòng lệnh và thậm chí viết cả hàm hoàn chỉnh chỉ bằng một vài ký tự nhập.</p>
         <strong class="dark:text-white">- Tính năng chính:</strong></br>
        <ul class="list-disc pl-5 dark:text-white">
          <li>Tự động gợi ý code dựa trên AI.</li></br>
          <li>Hoàn thành dòng lệnh, đoạn code và cả hàm chỉ với vài ký tự.</li></br>
          <li>Hỗ trợ nhiều ngôn ngữ lập trình: JavaScript, TypeScript, React, Python, Go, Java, v.v.</li></br>
          <li>Học từ code của bạn để đề xuất thông minh hơn.</li></br>
        </ul>
        <p class="dark:text-white">
        <strong>Lưu ý:</strong></br>- Không nên phụ thuộc hoàn toàn vào Copilot – nó chỉ là AI gợi ý, bạn vẫn cần kiểm tra logic code.</br>- Copilot không luôn viết code tối ưu, có thể cần refactor lại.</br>- Tránh dùng Copilot để viết code quan trọng liên quan đến bảo mật.
        </p>
        </br>
        <h2 class="text-blue-500 text-2xl font-bold">9. GitLens</h2>
         <img src="/public/images/gitLens-exten-item-9.jpg" class="w-[90%] h-auto object-cover mx-auto py-2 rounded"/>
         <p class="dark:text-white">- GitLens là một extension dành cho Visual Studio Code (VS Code), giúp bạn xem lịch sử Git, theo dõi ai đã chỉnh sửa code, so sánh commit, xem blame trực tiếp ngay trong editor và nhiều tính năng khác.</p>
          <strong class="dark:text-white">- Tính năng chính:</strong></br>
        <ul class="list-disc pl-5 dark:text-white">
          <li>Xem ai đã chỉnh sửa từng dòng code (Git Blame)</li></br>
          <li>So sánh thay đổi giữa các commit, branch hoặc stash.</li></br>
          <li>Xem lịch sử commit trực tiếp trong VS Code.</li></br>
          <li>Hỗ trợ hiển thị inline blame ngay trong editor.</li></br>
          <li>Tích hợp mạnh mẽ với GitHub, GitLab, Bitbucket.</li></br>
        </ul>
        </br>
        <h2 class="text-blue-500 text-2xl font-bold">10. Path Intellisense</h2>
        <img src="/public/images/path-intellisense-exten-item-10.jpg" class="w-[90%] h-auto object-cover mx-auto py-2 rounded"/>
         <p class="dark:text-white">- Path Intellisense là một extension cho Visual Studio Code (VS Code), giúp bạn tự động hoàn thiện đường dẫn file khi bạn nhập vào trong dự án, giúp tiết kiệm thời gian và tránh lỗi nhập sai đường dẫn.</p>
        <strong class="dark:text-white">- Tính năng chính:</strong></br>
        <ul class="list-disc pl-5 dark:text-white">
          <li>Tự động gợi ý đường dẫn file hoặc thư mục khi bạn nhập vào trong code.</li></br>
          <li>Tự động hoàn thành đường dẫn tương đối hoặc tuyệt đối.</li></br>
          <li>Hỗ trợ nhiều loại file: HTML, CSS, JavaScript, TypeScript, JSON,...</li></br>
          <li>Hiển thị gợi ý ngay khi bạn bắt đầu nhập.</li></br>
          <li>Hỗ trợ cả tên file, tên thư mục và extension.</li></br>
        </ul>
        `,
    date: "March 21, 2025",
    readTime: "10 min read",
    author: "Nguyen Van Lien",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890",
    category: "Extension",
    tags: ["HTML5", "Web Development", "Frontend"],
    relatedPosts: [2, 3],
  },
  {
    id: 2,
    title: "Những thuật ngữ trong ngành IT",
    slug: "nhung-thuat-ngu-trong-nghanh-it",
    excerpt: "Master the art of creating accessible and user-friendly forms",
    content: `
    <div class="mb-10">
      <h2 class="text-center dark:text-white text-4xl font-bold">A</h2>
      <div class="mt-5">
        <h2 class="text-blue-500 text-xl font-bold uppercase">Api</h2>
        <p class="dark:text-white"><strong>&ndash; Application Programming Interface:</strong> bộ tính năng code viết sẵn (properties, methods, classes,…) do nhà phát hành API chỉ định, giúp chúng ta sử dụng các best practice và viết code được nhất quán.</p>
      </div>
      <div class="mt-5">
        <h2 class="text-blue-500 text-xl font-bold uppercase">Ajax</h2>
        <p class="dark:text-white"><strong>&ndash; Asynchronous Javascript and XML:</strong> (Javascript và HTML ko đồng bộ): công nghệ giúp tạo ra những trang web động mà ko phải reload lại trang, giúp tác vụ chạy mượt và đẹp hơn.</p>
      </div>
      <div class="mt-5">
        <h2 class="text-blue-500 text-xl font-bold uppercase">Adaptive Web Design</h2>
        <p class="dark:text-white">&ndash; Adaptive Web Design - Thiết kế thích ứng là quá trình tạo ra một số bố cục cố định cho các kích cỡ màn hình khác nhau. Về bản chất, một nhà thiết kế có thể tạo ra những trải nghiệm hoàn toàn khác nhau cho điện thoại, máy tính bản và máy tính để bàn.</p>
      </div>
    </div>


    <div class="mb-10">
      <h2 class="text-center dark:text-white text-4xl font-bold">B</h2>
      <div class="mt-5">
        <h2 class="text-blue-500 text-xl font-bold uppercase">Browser</h2>
        <p class="dark:text-white">&ndash; Browser là phần mềm đc sử dụng để truy cập internet và hiển thị các trang web. Khi bạn nhập địa chỉ web or URL vào trình duyệt, bạn đang gửi một loạt yêu cầu một cách hiệu quả. Các trình duyệt phổ biến nhất bao gồm: Microsoft Internet Exploror, Google Chrome, Mozilla Firefox, Opera, Safari cho Apple.</p>
      </div>
      <div class="mt-5">
        <h2 class="text-blue-500 text-xl font-bold uppercase">Bem</h2>
        <p class="dark:text-white"><strong>&ndash; Block - Element - Modifier:</strong> Quy tắc đặt tên để viết css class dễ đọc, nhất quán, dễ maintain.</p>
        <p class="dark:text-white">&ndash; Block là tên của các thực thể riêng lẻ, như menu hoặc button.</p>
        <p class="dark:text-white">Element là các phần hoặc functionality khác nhau của blocks, như success hoặc alert.</p>
        <p class="dark:text-white">&ndash; Modifier thay đổi style của blocks, như lớn hoặc nhỏ: Ví dụ như: button__alert—large chính là một tên class BEM hợp lệ.</p>
      </div>
      <div class="mt-5">
        <h2 class="text-blue-500 text-xl font-bold uppercase">Bug</h2>
        <p class="dark:text-white">&ndash; Lỗi hoặc lỗ hỏng trong trang web hoặc ứng dụng khiến trang web hoặc ứng dụng ko chạy như mong đợi.</p>
      </div>
    </div>

    <div class="mb-10">
      <h2 class="text-center dark:text-white text-4xl font-bold">C</h2>
      <div class="mt-5">
        <h2 class="text-blue-500 text-xl font-bold uppercase">Cache</h2>
        <p class="dark:text-white">&ndash; Bộ nhớ cache không gian lưu trữ tạm thời cho dữ liệu. Khi bạn truy cập một trang web, các tệp bạn yêu cầu sẽ tự động đc lưu trữ trong bộ nhớ cache. Nếu bạn quay lại cùng trang web đó trong tương lai gần, trình duyệt của bạn sẽ truy xuất các tệp cần thiết từ bộ nhớ cache của bạn thay vì từ máy chủ gốc - vì vậy trang web sẽ tải nhanh hơn, giúp giảm request đến máy chủ, tăng tốc độ load trang.</p>
      </div>
    </div>
    `,
    date: "April 5, 2025",
    readTime: "20 min read",
    author: "Nguyen Van Lien",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
    category: "Tip-Strict",
    tags: ["HTML", "Forms", "Accessibility"],
    relatedPosts: [1, 3],
  },
  //   {
  //     id: 3,
  //     title: "HTML Canvas Fundamentals 3",
  //     slug: "html-canvas-fundamentals",
  //     excerpt: "Learn the basics of HTML Canvas and create interactive graphics",
  //     content: `# HTML Canvas Fundamentals

  // The HTML Canvas element provides a powerful way to create dynamic graphics...`,
  //     date: "March 5, 2024",
  //     readTime: "12 min read",
  //     author: "Nguyen Van Lien",
  //     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  //     category: "HTML",
  //     tags: ["HTML", "Canvas", "Graphics"],
  //     relatedPosts: [1, 2],
  //   },
  //   {
  //     id: 4,
  //     title: "HTML Canvas Fundamentals 4",
  //     slug: "html-canvas-fundamentals",
  //     excerpt: "Learn the basics of HTML Canvas and create interactive graphics",
  //     content: `# HTML Canvas Fundamentals

  // The HTML Canvas element provides a powerful way to create dynamic graphics...`,
  //     date: "March 5, 2024",
  //     readTime: "12 min read",
  //     author: "Nguyen Van Lien",
  //     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  //     category: "HTML",
  //     tags: ["HTML", "Canvas", "Graphics"],
  //     relatedPosts: [1, 2],
  //   },
  //   {
  //     id: 5,
  //     title: "HTML Canvas Fundamentals 5",
  //     slug: "html-canvas-fundamentals",
  //     excerpt: "Learn the basics of HTML Canvas and create interactive graphics",
  //     content: `# HTML Canvas Fundamentals

  // The HTML Canvas element provides a powerful way to create dynamic graphics...`,
  //     date: "March 5, 2024",
  //     readTime: "12 min read",
  //     author: "Nguyen Van Lien",
  //     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  //     category: "HTML",
  //     tags: ["HTML", "Canvas", "Graphics"],
  //     relatedPosts: [1, 2],
  //   },
];

// CSS Blog Posts Data
export const cssBlogPosts: CssBlogPost[] = [
  {
    id: 1,
    title: "Tips & Tricks for Modern CSS Layout 7",
    slug: "modern-css-layout-tips",
    excerpt: "Essential tips and tricks for modern CSS layouts",
    content: `# Modern CSS Layout Tips & Tricks

Learn how to create efficient and responsive layouts using modern CSS techniques...`,
    date: "March 20, 2024",
    readTime: "10 min read",
    author: "Nguyen Van Lien",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    category: "CSS",
    tags: ["CSS", "Layout", "Web Design"],
    relatedPosts: [2, 3],
  },
  {
    id: 2,
    title: "Mastering CSS Grid Layout 8",
    slug: "mastering-css-grid",
    excerpt: "Deep dive into CSS Grid Layout system",
    content: `# Mastering CSS Grid Layout

CSS Grid is a powerful tool for creating complex layouts. Let's explore its features...`,
    date: "March 15, 2024",
    readTime: "15 min read",
    author: "Nguyen Van Lien",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613",
    category: "CSS",
    tags: ["CSS", "Grid", "Layout"],
    relatedPosts: [1, 3],
  },
  {
    id: 3,
    title: "Advanced CSS Animations 9",
    slug: "advanced-css-animations",
    excerpt: "Create stunning animations with CSS",
    content: `# Advanced CSS Animations

Learn how to create complex and performant animations using CSS...`,
    date: "March 10, 2024",
    readTime: "12 min read",
    author: "Nguyen Van Lien",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
    category: "CSS",
    tags: ["CSS", "Animation", "Web Design"],
    relatedPosts: [1, 2],
  },
  {
    id: 4,
    title: "Advanced CSS Animations 10",
    slug: "advanced-css-animations",
    excerpt: "Create stunning animations with CSS",
    content: `# Advanced CSS Animations

Learn how to create complex and performant animations using CSS...`,
    date: "March 10, 2024",
    readTime: "12 min read",
    author: "Nguyen Van Lien",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
    category: "CSS",
    tags: ["CSS", "Animation", "Web Design"],
    relatedPosts: [1, 2],
  },
];

// Get HTML post by ID
export const getHtmlPostById = (id: number): HtmlBlogPost | undefined => {
  return htmlBlogPosts.find((post) => post.id === id);
};

// Get CSS post by ID
export const getCssPostById = (id: number): CssBlogPost | undefined => {
  return cssBlogPosts.find((post) => post.id === id);
};

// Get related HTML posts
export const getRelatedHtmlPosts = (id: number): HtmlBlogPost[] => {
  const post = htmlBlogPosts.find((p) => p.id === id);
  if (!post || !post.relatedPosts) return [];
  return htmlBlogPosts.filter((p) => post.relatedPosts?.includes(p.id));
};

// Get related CSS posts
export const getRelatedCssPosts = (id: number): CssBlogPost[] => {
  const post = cssBlogPosts.find((p) => p.id === id);
  if (!post || !post.relatedPosts) return [];
  return cssBlogPosts.filter((p) => post.relatedPosts?.includes(p.id));
};

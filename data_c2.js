// CHƯƠNG 2: QUYẾT ĐỊNH QUẢN TRỊ & HỆ THỐNG THÔNG TIN (14 CÂU)
window.DATA_C2 = [
  {
    id: 14,
    chapter: 2,
    stage: 1,
    code: "C2.Q1",
    title: "Quyết định quản trị vs Quyết định cá nhân",
    question: "Thế nào là quyết định quản trị? Phân biệt quyết định quản trị với quyết định của cá nhân?",
    keywords: ["Hành vi sáng tạo", "Giải quyết vấn đề chín muồi", "Thẩm quyền pháp lý", "Mục tiêu tổ chức"],
    summary: [
      "Quyết định quản trị: Hành vi sáng tạo của chủ thể quản trị nhằm định ra mục tiêu, hành động giải quyết vấn đề của tổ chức.",
      "Khác với quyết định cá nhân ở: Chủ thể, Mục đích, Cơ sở khoa học, Phạm vi ảnh hưởng, và Trách nhiệm pháp lý."
    ],
    explanation: `
      <p><strong>1. Khái niệm Quyết định quản trị:</strong></p>
      <p>Là hành vi sáng tạo của chủ thể quản trị nhằm lựa chọn một phương án hành động tối ưu trong số nhiều phương án khả thi, nhằm giải quyết một vấn đề đã chín muồi của tổ chức trên cơ sở nắm vững các quy luật khách quan và thông tin thực tế.</p>
      <div class="academic-table-wrapper">
        <table class="academic-table">
          <tr><th>Tiêu chí so sánh</th><th>Quyết định quản trị</th><th>Quyết định cá nhân</th></tr>
          <tr><td><strong>Chủ thể ban hành</strong></td><td>Nhà quản trị có thẩm quyền chính thức</td><td>Bất kỳ cá nhân nào trong đời sống</td></tr>
          <tr><td><strong>Mục đích hướng tới</strong></td><td>Vì lợi ích và mục tiêu chung của tổ chức</td><td>Thỏa mãn nhu cầu, sở thích cá nhân</td></tr>
          <tr><td><strong>Căn cứ ra quyết định</strong></td><td>Thông tin hệ thống, quy trình khoa học logic</td><td>Kinh nghiệm riêng, cảm xúc, trực giác</td></tr>
          <tr><td><strong>Phạm vi ảnh hưởng</strong></td><td>Tác động đến nhiều người, phòng ban, toàn công ty</td><td>Chỉ ảnh hưởng bản thân hoặc gia đình hẹp</td></tr>
          <tr><td><strong>Trách nhiệm pháp lý</strong></td><td>Chịu trách nhiệm pháp lý, kinh tế trước tổ chức & luật pháp</td><td>Tự chịu trách nhiệm với chính mình</td></tr>
          <tr><td><strong>Nguồn lực thực thi</strong></td><td>Sử dụng ngân sách, nhân lực của tổ chức</td><td>Dùng nguồn lực cá nhân hạn hẹp</td></tr>
        </table>
      </div>
    `,
    example: "Bạn quyết định mua chiếc áo mới là Quyết định cá nhân (dùng tiền túi, sở thích riêng). Nhưng Giám đốc mua 10 máy dệt mới giá 5 tỷ đồng là Quyết định quản trị (dùng tiền công ty, chịu trách nhiệm kết quả sản xuất).",
    quiz: {
      question: "Điểm khác biệt cốt lõi nhất giữa quyết định quản trị và quyết định cá nhân là gì?",
      options: [
        "A. Quyết định quản trị luôn đúng còn quyết định cá nhân luôn sai",
        "B. Quyết định quản trị nhân danh tổ chức, vì mục tiêu tổ chức và chịu trách nhiệm pháp lý",
        "C. Quyết định cá nhân tốn nhiều thời gian hơn quyết định quản trị",
        "D. Quyết định quản trị không cần dựa trên thông tin thực tế"
      ],
      answer: 1,
      explanation: "Quyết định quản trị do người có thẩm quyền ban hành nhân danh tổ chức, hướng đến mục tiêu chung và gắn liền với trách nhiệm pháp lý."
    }
  },
  {
    id: 15,
    chapter: 2,
    stage: 1,
    code: "C2.Q2",
    title: "Các yêu cầu đối với Quyết định quản trị",
    question: "Phân tích các yêu cầu đối với quyết định quản trị?",
    keywords: ["Hợp pháp", "Khoa học (Có căn cứ)", "Thống nhất", "Khả thi", "Kịp thời", "Linh hoạt"],
    summary: [
      "Hợp pháp: Phù hợp pháp luật và điều lệ, đúng thẩm quyền.",
      "Khoa học: Dựa trên số liệu thực tế, quy luật khách quan.",
      "Thống nhất: Không mâu thuẫn, chồng chéo với quyết định khác.",
      "Khả thi: Vừa sức với nguồn lực thực tế của công ty.",
      "Kịp thời: Đúng thời điểm để chớp thời cơ.",
      "Linh hoạt: Dễ thích ứng khi môi trường thay đổi."
    ],
    explanation: `
      <p>Một quyết định quản trị có hiệu lực và hiệu quả phải thỏa mãn <strong>6 yêu cầu căn bản</strong>:</p>
      <ul>
        <li><strong>1. Tính hợp pháp:</strong> Quyết định phải tuân thủ Hiến pháp, luật pháp quốc gia và nội quy điều lệ doanh nghiệp; phải được ban hành bởi người có đúng thẩm quyền pháp lý.</li>
        <li><strong>2. Tính khoa học (Có căn cứ xác đáng):</strong> Phải dựa trên cơ sở dữ liệu xác thực, phương pháp phân tích logic và quy luật kinh tế khách quan; tuyệt đối tránh quyết định duy ý chí, võ đoán.</li>
        <li><strong>3. Tính thống nhất:</strong> Không được mâu thuẫn, xung đột hoặc phủ định với các quyết định khác của cấp trên hoặc của các bộ phận ngang hàng.</li>
        <li><strong>4. Tính khả thi:</strong> Phải tính toán kỹ lưỡng xem nguồn lực của doanh nghiệp (vốn, công nghệ, nhân lực, thời gian) có đủ khả năng thực hiện hay không.</li>
        <li><strong>5. Tính kịp thời:</strong> Ra quyết định đúng lúc; nếu chậm trễ sẽ bỏ lỡ thời cơ vàng hoặc để rủi ro bùng phát thành khủng hoảng.</li>
        <li><strong>6. Tính linh hoạt và rõ ràng, dễ hiểu:</strong> Ngắn gọn, súc tích, người thừa hành đọc là hiểu ngay cách làm; có thể điều chỉnh khi môi trường thay đổi.</li>
      </ul>
    `,
    example: "Công ty ra quyết định sa thải nhân viên nhưng không có biên bản vi phạm kỷ luật theo Bộ luật Lao động thì quyết định đó vi phạm 'Tính hợp pháp' và sẽ bị tòa án hủy bỏ, phải đền bù.",
    quiz: {
      question: "Một quyết định đầu tư được phê duyệt nhưng công ty không đủ vốn và nhân sự để triển khai đã vi phạm yêu cầu nào?",
      options: [
        "A. Tính hợp pháp",
        "B. Tính khả thi",
        "C. Tính kịp thời",
        "D. Tính nghệ thuật"
      ],
      answer: 1,
      explanation: "Tính khả thi đòi hỏi quyết định phải phù hợp với tiềm lực thực tế của doanh nghiệp để đảm bảo có thể thực thi thành công."
    }
  },
  {
    id: 16,
    chapter: 2,
    stage: 1,
    code: "C2.Q3",
    title: "Các bước của quá trình Ra quyết định quản trị",
    question: "Trình bày các bước của quá trình ra quyết định?",
    keywords: ["Nhận diện vấn đề", "Xác định mục tiêu & tiêu chuẩn", "Tìm phương án", "Đánh giá", "Lựa chọn tối ưu", "Thực hiện & Kiểm tra"],
    summary: [
      "Bước 1: Nhận diện và định nghĩa vấn đề.",
      "Bước 2: Xác định mục tiêu và tiêu chuẩn đánh giá.",
      "Bước 3: Xây dựng các phương án giải quyết khả thi.",
      "Bước 4: Đánh giá các phương án theo tiêu chuẩn.",
      "Bước 5: Lựa chọn phương án tối ưu.",
      "Bước 6: Tổ chức thực hiện và đánh giá kết quả."
    ],
    explanation: `
      <p>Quá trình ra quyết định quản trị khoa học trải qua <strong>6 bước chuẩn mực</strong>:</p>
      <ol>
        <li><strong>Bước 1 - Nhận diện và xác định vấn đề:</strong> Phát hiện khoảng cách giữa tình trạng thực tế và mục tiêu mong muốn; bóc tách nguyên nhân cốt lõi (không nhầm với hiện tượng bên ngoài).</li>
        <li><strong>Bước 2 - Xác định mục tiêu và tiêu chuẩn đánh giá:</strong> Đề ra các tiêu chí cụ thể để đo lường phương án (chi phí tối đa, thời gian hoàn thành, mức sinh lời kỳ vọng, độ an toàn).</li>
        <li><strong>Bước 3 - Xây dựng các phương án giải quyết:</strong> Vận dụng tư duy sáng tạo, động não (Brainstorming) để đưa ra nhiều kịch bản, phương án hành động khác nhau.</li>
        <li><strong>Bước 4 - Phân tích và đánh giá các phương án:</strong> Đem từng phương án đối chiếu với hệ tiêu chuẩn ở Bước 2; cân nhắc ưu điểm, nhược điểm và rủi ro tiềm ẩn của từng lựa chọn.</li>
        <li><strong>Bước 5 - Lựa chọn phương án tối ưu:</strong> Chọn phương án mang lại hiệu quả tổng thể cao nhất, chi phí hợp lý nhất và rủi ro trong tầm kiểm soát.</li>
        <li><strong>Bước 6 - Tổ chức thực hiện và kiểm tra kết quả:</strong> Truyền đạt quyết định, phân công trách nhiệm, cấp ngân sách và thiết lập cơ chế giám sát điều chỉnh sai sót.</li>
      </ol>
    `,
    example: "Doanh số giảm 30% -> Nhận diện nguyên nhân do đối thủ hạ giá -> Đặt mục tiêu lấy lại thị phần trong 3 tháng -> Lập 3 phương án: Giảm giá, Tặng quà, Đẩy mạnh quảng cáo -> Đánh giá chi phí -> Chọn phương án Tặng quà kèm dịch vụ khách hàng vượt trội -> Triển khai và đo lường doanh thu hàng tuần.",
    quiz: {
      question: "Bước đầu tiên và quan trọng nhất quyết định sự đúng đắn của toàn bộ quá trình ra quyết định là gì?",
      options: [
        "A. Đánh giá các phương án",
        "B. Nhận diện và xác định chính xác vấn đề",
        "C. Lựa chọn phương án tối ưu",
        "D. Bỏ phiếu kín"
      ],
      answer: 1,
      explanation: "Nếu nhận diện sai vấn đề (chuẩn đoán sai bệnh) thì mọi giải pháp đưa ra ở các bước sau đều sẽ vô nghĩa và gây lãng phí."
    }
  },
  {
    id: 17,
    chapter: 2,
    stage: 1,
    code: "C2.Q4",
    title: "Những khó khăn trong giai đoạn Xác định vấn đề",
    question: "Những khó khăn trong giai đoạn xác định vấn đề?",
    keywords: ["Nhầm triệu chứng với nguyên nhân", "Thông tin nhiễu/sai lệch", "Định kiến tâm lý", "Vấn đề đa chiều phức tạp", "Áp lực thời gian"],
    summary: [
      "1. Nhầm lẫn giữa Triệu chứng (hiện tượng bên ngoài) và Nguyên nhân gốc rễ.",
      "2. Thiếu thông tin hoặc thông tin bị sai lệch, che giấu.",
      "3. Thiên kiến nhận thức và lối mòn tư duy của nhà quản trị.",
      "4. Vấn đề phức tạp liên quan đan xen nhiều bộ phận.",
      "5. Áp lực thời gian gấp gáp gây phán đoán vội vàng."
    ],
    explanation: `
      <p>Giai đoạn xác định vấn đề luôn là giai đoạn khó khăn và dễ sai lầm nhất do các rào cản:</p>
      <ul>
        <li><strong>Nhầm lẫn giữa Triệu chứng (Symptom) và Nguyên nhân cốt lõi (Root cause):</strong>
          <p>Nhà quản trị thường thấy hiện tượng bề nổi (doanh số giảm, công nhân nghỉ việc nhiều) mà kết luận đó là vấn đề, trong khi nguyên nhân thực sự lại nằm ở chính sách giá sai lầm hoặc quản lý phong cách độc đoán.</p>
        </li>
        <li><strong>Sự thiếu hụt và méo mó của thông tin:</strong>
          <p>Thông tin từ thị trường mờ nhạt hoặc cấp dưới có xu hướng "báo cáo hoa hồng" (che giấu tin xấu, thổi phồng tin tốt) khiến người ra quyết định bị che mắt.</p>
        </li>
        <li><strong>Định kiến chủ quan và lối mòn tâm lý:</strong>
          <p>Nhà quản trị có xu hướng dựa vào thành công trong quá khứ hoặc sở thích cá nhân để áp đặt góc nhìn, phớt lờ các cảnh báo bất thường.</p>
        </li>
        <li><strong>Mối quan hệ nhân quả phức tạp, đa chiều:</strong>
          <p>Một vấn đề nảy sinh có thể do sự tương tác của hàng chục yếu tố (chuỗi cung ứng đứt gãy, biến động tỷ giá, công nghệ lạc hậu) khiến việc bóc tách rất khó khăn.</p>
        </li>
      </ul>
    `,
    example: "Máy móc hay bị hỏng hóc (Triệu chứng) -> Nếu chỉ sửa máy thì máy lại hỏng tiếp. Tìm nguyên nhân gốc rễ mới phát hiện do công nhân không được đào tạo quy trình tra dầu mỡ định kỳ (Nguyên nhân thực sự).",
    quiz: {
      question: "Hiện tượng công nhân đình công phản đối ban giám đốc được xem là:",
      options: [
        "A. Nguyên nhân gốc rễ của vấn đề",
        "B. Triệu chứng bên ngoài phản ánh nguyên nhân sâu xa (chế độ đãi ngộ bất công, môi trường làm việc độc hại)",
        "C. Mục tiêu của tổ chức",
        "D. Một phương án ra quyết định"
      ],
      answer: 1,
      explanation: "Đình công là triệu chứng bộc phát ra bên ngoài từ các mâu thuẫn âm ỉ về tiền lương, an toàn lao động hoặc phong cách đối xử bất công."
    }
  },
  {
    id: 18,
    chapter: 2,
    stage: 1,
    code: "C2.Q5",
    title: "Các phương pháp ra quyết định quản trị",
    question: "Các phương pháp ra quyết định? Quyết định cá nhân và quyết định tập thể (nhóm danh nghĩa, động não và Delphi), định lượng toán học và ngoại cảm",
    keywords: ["Động não (Brainstorming)", "Nhóm danh nghĩa (NGT)", "Kỹ thuật Delphi", "Định lượng toán học", "Ngoại cảm (Trực giác)"],
    summary: [
      "Brainstorming: Phát biểu tự do càng nhiều ý tưởng càng tốt, TUYỆT ĐỐI CẤM PHÊ PHÁN.",
      "Nhóm danh nghĩa: Viết độc lập ra giấy, trình bày lần lượt, bỏ phiếu kín.",
      "Delphi: Khảo sát chuyên gia ẩn danh qua nhiều vòng bảng hỏi từ xa.",
      "Định lượng: Mô hình toán học, cây quyết định, tối ưu hóa.",
      "Ngoại cảm: Trực giác, linh cảm dựa trên kinh nghiệm tích lũy."
    ],
    explanation: `
      <p>Các phương pháp ra quyết định được chia thành các nhóm phương pháp chính:</p>
      <div class="academic-table-wrapper">
        <table class="academic-table">
          <tr><th>Phương pháp</th><th>Bản chất & Quy trình thực hiện</th><th>Nguyên tắc vàng</th></tr>
          <tr>
            <td><strong>Động não (Brainstorming)</strong></td>
            <td>Một nhóm 5-10 người ngồi lại để nảy sinh ý tưởng giải quyết vấn đề trong thời gian ngắn (15-30 phút).</td>
            <td><strong>TUYỆT ĐỐI CẤM PHÊ PHÁN</strong> hoặc chê bai bất kỳ ý tưởng nào trong lúc thảo luận; ưu tiên số lượng ý tưởng.</td>
          </tr>
          <tr>
            <td><strong>Nhóm danh nghĩa (NGT)</strong></td>
            <td>Các thành viên ngồi cùng phòng nhưng làm việc độc lập: ghi ý kiến ra giấy -> trình bày lần lượt lên bảng không tranh luận -> thảo luận làm rõ -> <strong>bỏ phiếu kín xếp hạng</strong>.</td>
            <td>Hạn chế sự áp đặt của người lớn giọng; đảm bảo quyền bình đẳng cho người rụt rè.</td>
          </tr>
          <tr>
            <td><strong>Kỹ thuật Delphi</strong></td>
            <td>Thu thập ý kiến của các chuyên gia độc lập, <strong>ẩn danh</strong> qua nhiều vòng bảng hỏi khảo sát từ xa. Người điều phối tổng hợp kết quả và gửi lại để chuyên gia hiệu chỉnh dần đến khi đồng thuận.</td>
            <td>Tránh áp lực tâm lý đám đông vì các chuyên gia không bao giờ trực tiếp gặp mặt nhau.</td>
          </tr>
          <tr>
            <td><strong>Định lượng toán học</strong></td>
            <td>Dùng ma trận xác suất, cây quyết định (Decision Tree), bài toán quy hoạch tuyến tính, phân tích tài chính NPV/IRR.</td>
            <td>Đòi hỏi dữ liệu định lượng chính xác; loại bỏ tính chủ quan.</td>
          </tr>
          <tr>
            <td><strong>Ngoại cảm / Trực giác</strong></td>
            <td>Ra quyết định dựa trên linh cảm, giác quan thứ sáu và phản xạ kinh nghiệm tiềm thức khi thiếu hụt dữ liệu hoặc thời gian khẩn cấp.</td>
            <td>Đòi hỏi nhà quản trị phải có bề dày trải nghiệm và bản lĩnh cao.</td>
          </tr>
        </table>
      </div>
    `,
    example: "Khi cần dự báo công nghệ vi mạch trong 20 năm tới, người ta áp dụng kỹ thuật Delphi gửi câu hỏi cho 50 nhà khoa học trên thế giới để lấy ý kiến độc lập khách quan.",
    quiz: {
      question: "Nguyên tắc cốt tử không bao giờ được vi phạm trong buổi Động não (Brainstorming) là gì?",
      options: [
        "A. Phải có ít nhất 100 người tham gia",
        "B. Tuyệt đối không được chỉ trích, phê phán ý kiến của người khác trong lúc đưa ra ý tưởng",
        "C. Chỉ cho phép cấp trưởng phòng phát biểu",
        "D. Bắt buộc phải bỏ phiếu kín ngay từ đầu"
      ],
      answer: 1,
      explanation: "Trong Brainstorming, sự phê phán sẽ bóp chết tư duy sáng tạo của các thành viên. Việc đánh giá và chọn lọc chỉ được thực hiện sau khi buổi thảo luận kết thúc."
    }
  },
  {
    id: 19,
    chapter: 2,
    stage: 1,
    code: "C2.Q6",
    title: "Ưu / Nhược điểm của Ra quyết định Cá nhân & Tập thể",
    question: "Ưu điểm/nhược điểm của phương pháp ra quyết định cá nhân và quyết định tập thể?",
    keywords: ["Quyết định cá nhân", "Quyết định tập thể", "Tư duy bầy đàn (Groupthink)", "Trách nhiệm cá nhân vs Tập thể"],
    summary: [
      "QĐ Cá nhân: Nhanh, bảo mật, rõ trách nhiệm; nhưng dễ chủ quan, phiến diện, thiếu ủng hộ.",
      "QĐ Tập thể: Đa chiều, sáng tạo, cam kết cao; nhưng tốn thời gian, nguy cơ 'Tư duy bầy đàn', trách nhiệm mờ nhạt."
    ],
    explanation: `
      <div class="academic-table-wrapper">
        <table class="academic-table">
          <tr><th>Hình thức</th><th>Ưu điểm nổi bật</th><th>Nhược điểm & Rủi ro</th></tr>
          <tr>
            <td><strong>Quyết định Cá nhân</strong></td>
            <td>
              - Tốc độ ra quyết định rất nhanh, chớp thời cơ kịp thời.<br>
              - Tính bảo mật thông tin cao.<br>
              - Tiết kiệm thời gian, chi phí hội họp.<br>
              - Trách nhiệm quy về một người rõ ràng.
            </td>
            <td>
              - Dễ mang tính chủ quan, phiến diện do giới hạn nhận thức của một người.<br>
              - Ít phương án sáng tạo đột phá.<br>
              - Cấp dưới khó đồng lòng ủng hộ vì cảm thấy bị áp đặt, không được tôn trọng.
            </td>
          </tr>
          <tr>
            <td><strong>Quyết định Tập thể</strong></td>
            <td>
              - Huy động trí tuệ tập thể, nhiều góc nhìn đa chiều.<br>
              - Nhiều thông tin và phương án sáng tạo hơn.<br>
              - Cấp dưới hào hứng, cam kết thực thi cao vì chính họ tham gia đóng góp.<br>
              - Hạn chế sai lầm do có sự phản biện qua lại.
            </td>
            <td>
              - Tốn kém thời gian và chi phí tổ chức họp hành.<br>
              - Dễ bị chi phối bởi người có chức quyền lớn hoặc người lớn giọng.<br>
              - Nguy cơ rơi vào <strong>Tư duy bầy đàn (Groupthink)</strong>: ngại phản biện để giữ hòa khí.<br>
              - Trách nhiệm không rõ ràng ('Cha chung không ai khóc').
            </td>
          </tr>
        </table>
      </div>
    `,
    example: "Khi nhà xưởng bị cháy chập điện, Giám đốc phải lập tức tự ra quyết định ngắt điện và sơ tán (Cá nhân - nhanh). Nhưng khi thiết kế chiến lược 5 năm cho công ty, cần họp HĐQT và các khối chuyên môn (Tập thể - đa chiều).",
    quiz: {
      question: "Hiện tượng nào sau đây là nhược điểm tâm lý nguy hiểm trong ra quyết định tập thể?",
      options: [
        "A. Hiệu ứng cộng hưởng (Synergy)",
        "B. Tư duy nhóm / Tư duy bầy đàn (Groupthink) - các thành viên ngại phản biện để giữ hòa khí",
        "C. Kỹ thuật Delphi ẩn danh",
        "D. Tầm quản trị mở rộng"
      ],
      answer: 1,
      explanation: "Groupthink khiến mọi người gật đầu đồng ý với phương án sai lầm của số đông hoặc của người lãnh đạo vì áp lực muốn hòa đồng, không dám nói lên sự thật."
    }
  },
  {
    id: 20,
    chapter: 2,
    stage: 1,
    code: "C2.Q7",
    title: "Tiêu chuẩn đánh giá phương án: Càng nhiều càng tốt?",
    question: "Chọn càng nhiều tiêu chuẩn để đánh giá phương án thì càng tốt?",
    keywords: ["Không đúng / Sai", "Mâu thuẫn tiêu chuẩn", "Quá tải thông tin", "Chi phí & Thời gian", "Vừa đủ & Trọng yếu"],
    summary: [
      "Khẳng định: KHÔNG ĐÚNG (SAI).",
      "Lý do 1: Gây quá tải thông tin, chậm trễ ra quyết định làm mất cơ hội.",
      "Lý do 2: Các tiêu chuẩn dễ triệt tiêu, mâu thuẫn lẫn nhau (rẻ nhất vs tốt nhất).",
      "Lý do 3: Tốn kém chi phí thu thập dữ liệu.",
      "Chuẩn mực: Chỉ cần hệ thống tiêu chuẩn VỪA ĐỦ, TRỌNG TÂM, đo lường được."
    ],
    explanation: `
      <p>Quan điểm "chọn càng nhiều tiêu chuẩn đánh giá phương án thì càng tốt" là <strong>HOÀN TOÀN SAI LẦM</strong> trong lý thuyết và thực tiễn quản trị vì những lý do khoa học sau:</p>
      <ul>
        <li><strong>1. Gây quá tải thông tin và tê liệt quyết định (Analysis Paralysis):</strong> Quá nhiều tiêu chí đòi hỏi phải thu thập một lượng dữ liệu khổng lồ, khiến quá trình đánh giá kéo dài vô tận, làm trôi qua thời cơ kinh doanh quý giá.</li>
        <li><strong>2. Nguy cơ mâu thuẫn và triệt tiêu lẫn nhau giữa các tiêu chuẩn:</strong> Ví dụ: Tiêu chuẩn "Chi phí rẻ nhất" thường mâu thuẫn trực tiếp với tiêu chuẩn "Chất lượng cao cấp nhất" hoặc "Thời gian hoàn thành nhanh nhất". Nếu đưa quá nhiều tiêu chuẩn vào sẽ không có phương án nào thỏa mãn được.</li>
        <li><strong>3. Làm lu mờ mục tiêu cốt lõi:</strong> Người đánh giá bị phân tán vào những tiểu tiết phụ mà quên mất mục tiêu chiến lược sống còn của doanh nghiệp.</li>
        <li><strong>4. Vi phạm nguyên tắc Hiệu quả - Kinh tế (Cost - Benefit):</strong> Chi phí bỏ ra để đo lường 20 tiêu chuẩn phụ có thể lớn hơn nhiều lần lợi ích mà chúng đem lại.</li>
      </ul>
      <p><em>Kết luận khoa học:</em> Hệ thống tiêu chuẩn phải tuân thủ nguyên tắc <strong>Vừa đủ - Trọng yếu - Khả thi - Không chồng chéo</strong>, tập trung vào những tiêu chí quyết định trực tiếp đến mục tiêu.</p>
    `,
    example: "Khi tuyển thư ký giám đốc, chỉ cần 3 tiêu chuẩn trọng yếu: Ngoại ngữ tốt, Kỹ năng tin học, Tác phong cẩn thận. Nếu đưa thêm 15 tiêu chuẩn phụ (giọng hát hay, biết vẽ tranh, quê quán...) sẽ khiến không tuyển được ai và tốn chi phí phỏng vấn.",
    quiz: {
      question: "Tại sao việc đặt ra quá nhiều tiêu chuẩn khi đánh giá phương án lại bị coi là sai lầm trong quản trị?",
      options: [
        "A. Vì nhà quản trị không biết tính toán",
        "B. Vì các tiêu chuẩn có thể mâu thuẫn nhau, gây quá tải thông tin và lãng phí thời gian, chi phí",
        "C. Vì luật pháp nghiêm cấm dùng trên 3 tiêu chuẩn",
        "D. Vì phương án nào cũng có kết quả như nhau"
      ],
      answer: 1,
      explanation: "Hệ thống tiêu chuẩn cồng kềnh dẫn đến tê liệt phân tích (Analysis Paralysis), mâu thuẫn giữa các chỉ tiêu và bỏ lỡ thời cơ hành động."
    }
  },
  {
    id: 21,
    chapter: 2,
    stage: 1,
    code: "C2.Q8",
    title: "Bốn loại Quyết định quản trị theo Chức năng",
    question: "4 loại quyết định quản trị (QĐ kế hoạch, tổ chức, lãnh đạo, kiểm tra)",
    keywords: ["QĐ Hoạch định", "QĐ Tổ chức", "QĐ Lãnh đạo", "QĐ Kiểm tra"],
    summary: [
      "QĐ Hoạch định: Quyết định mục tiêu, chiến lược, ngân sách, sản phẩm mới.",
      "QĐ Tổ chức: Quyết định cơ cấu bộ máy, thành lập phòng ban, giao quyền.",
      "QĐ Lãnh đạo: Quyết định nhân sự, lương thưởng, kỷ luật, phong cách quản lý.",
      "QĐ Kiểm tra: Quyết định tiêu chuẩn đo lường, lịch kiểm toán, biện pháp sửa sai."
    ],
    explanation: `
      <p>Căn cứ vào chu trình 4 chức năng quản trị, các quyết định quản trị được phân loại cụ thể như sau:</p>
      <ul>
        <li><strong>1. Quyết định Hoạch định (Kế hoạch):</strong>
          <p>Là các quyết định định hướng tương lai: Xác định sứ mệnh, tầm nhìn, thiết lập mục tiêu doanh thu, lựa chọn chiến lược cạnh tranh, phê duyệt ngân sách hoạt động hàng năm, thông qua dự án đầu tư nhà máy mới.</p>
        </li>
        <li><strong>2. Quyết định Tổ chức:</strong>
          <p>Là các quyết định xây dựng và vận hành bộ máy: Thành lập, sáp nhập hoặc giải thể các phòng ban; quy định chức năng nhiệm vụ từng vị trí; phân cấp và ủy quyền; thiết lập chuỗi chỉ huy trong công ty.</p>
        </li>
        <li><strong>3. Quyết định Lãnh đạo:</strong>
          <p>Là các quyết định tác động trực tiếp vào con người: Tuyển dụng, bổ nhiệm, luân chuyển cán bộ; ban hành quy chế trả lương, thưởng hiệu suất; giải quyết tranh chấp lao động; xây dựng văn hóa công ty.</p>
        </li>
        <li><strong>4. Quyết định Kiểm tra:</strong>
          <p>Là các quyết định duy trì kỷ cương và hiệu chuẩn hệ thống: Ban hành định mức kỹ thuật và chỉ số KPI; phê duyệt lịch kiểm toán định kỳ; quyết định thu hồi sản phẩm lỗi; điều chỉnh mục tiêu khi thị trường biến động.</p>
        </li>
      </ul>
    `,
    example: "CEO quyết định thưởng 2 tháng lương cho đội bán hàng là QĐ Lãnh đạo; quyết định thành lập Ban Chuyển đổi số là QĐ Tổ chức; quyết định chỉ tiêu doanh thu 200 tỷ là QĐ Hoạch định; quyết định đình chỉ dây chuyền sản xuất vì lỗi kỹ thuật là QĐ Kiểm tra.",
    quiz: {
      question: "Quyết định bổ nhiệm một Trưởng phòng Marketing mới thuộc loại quyết định quản trị nào?",
      options: [
        "A. Quyết định Hoạch định",
        "B. Quyết định Tổ chức / Lãnh đạo",
        "C. Quyết định Kiểm tra",
        "D. Quyết định Nghiên cứu thị trường"
      ],
      answer: 1,
      explanation: "Bổ nhiệm cán bộ là quyết định bố trí nhân sự và tác động con người, gắn với chức năng Tổ chức và Lãnh đạo."
    }
  },
  {
    id: 22,
    chapter: 2,
    stage: 1,
    code: "C2.Q9",
    title: "Yếu tố cản trở Ra quyết định hiệu quả & Yếu tố dễ mắc nhất",
    question: "Nêu những yếu tố cản trở quá trình ra quyết định hiệu quả? Phân tích một yếu tố mà bạn cho là dễ mắc phải nhất?",
    keywords: ["Thiên kiến nhận thức", "Áp lực thời gian", "Thông tin sai lệch", "Tự tin thái quá (Overconfidence)", "Bẫy chi phí chìm (Sunk Cost)"],
    summary: [
      "Các yếu tố cản trở: Thiếu/nhiễu thông tin, Áp lực thời gian, Thiên kiến tâm lý, Năng lực quản trị, Xung đột lợi ích.",
      "Yếu tố dễ mắc nhất: Thiên kiến xác nhận (Confirmation Bias) hoặc Bẫy chi phí chìm (Sunk Cost Fallacy) - cố chấp theo đuổi dự án lỗ vì tiếc tiền đã bỏ ra."
    ],
    explanation: `
      <p><strong>1. Các yếu tố cản trở quá trình ra quyết định hiệu quả:</strong></p>
      <ul>
        <li>Thiếu hụt thông tin hoặc thông tin bị sai lệch, chậm trễ.</li>
        <li>Áp lực thời gian cấp bách và căng thẳng tâm lý (Stress) dẫn đến kết luận vội vàng.</li>
        <li>Các thiên kiến nhận thức (Cognitive biases): Thiên kiến xác nhận, bám mỏ neo, tự tin thái quá.</li>
        <li>Trình độ chuyên môn và tầm nhìn hạn chế của nhà quản trị.</li>
        <li>Hiện tượng Tư duy nhóm (Groupthink) làm triệt tiêu tính phản biện.</li>
        <li>Xung đột lợi ích cục bộ giữa các phòng ban.</li>
      </ul>
      <p><strong>2. Phân tích yếu tố dễ mắc phải nhất: 'Bẫy chi phí chìm' (Sunk Cost Fallacy):</strong></p>
      <ul>
        <li><em>Bản chất:</em> Là tâm lý tiếc nuối những khoản tiền, thời gian và công sức đã đầu tư trong quá khứ mà không thể thu hồi lại được.</li>
        <li><em>Hậu quả:</em> Thay vì dũng cảm cắt lỗ dừng dự án khi thị trường thay đổi, nhà quản trị lại tiếp tục rót thêm hàng tỷ đồng với hy vọng gỡ gạc, dẫn đến thảm họa tài chính lớn hơn.</li>
        <li><em>Bài học quản trị:</em> Khi ra quyết định cho tương lai, chỉ nhìn vào dòng tiền và lợi ích biên trong tương lai, tuyệt đối không để chi phí quá khứ chi phối.</li>
      </ul>
    `,
    example: "Một công ty công nghệ đã chi 50 tỷ phát triển ứng dụng nhưng thị trường đã chuyển sang dùng AI. Giám đốc vì tiếc 50 tỷ nên cố chi thêm 20 tỷ nữa để hoàn thiện ứng dụng lỗi thời, cuối cùng phá sản hoàn toàn.",
    quiz: {
      question: "Hiện tượng nhà quản trị tiếp tục rót vốn vào một dự án thua lỗ chỉ vì 'tiếc số tiền lớn đã đầu tư trước đây' được gọi là gì?",
      options: [
        "A. Hiệu ứng cộng hưởng",
        "B. Bẫy chi phí chìm (Sunk Cost Fallacy)",
        "C. Kỹ thuật động não",
        "D. Tầm quản trị hẹp"
      ],
      answer: 1,
      explanation: "Bẫy chi phí chìm (Sunk cost fallacy) là sai lầm tâm lý kinh điển khi người ra quyết định bị ám ảnh bởi các chi phí quá khứ không thể đảo ngược."
    }
  },
  {
    id: 23,
    chapter: 2,
    stage: 1,
    code: "C2.Q10",
    title: "So sánh Ưu, Nhược điểm & Điều kiện sử dụng QĐ Cá nhân vs Tập thể",
    question: "So sánh ưu, nhược điểm và điều kiện sử dụng để ra quyết định cá nhân và ra quyết định tập thể?",
    keywords: ["Bảng so sánh tổng hợp", "Điều kiện sử dụng", "Tình huống khẩn cấp", "Vấn đề chiến lược phức tạp"],
    summary: [
      "QĐ Cá nhân dùng khi: Tình huống khẩn cấp, vấn đề đơn giản đã có quy trình chuẩn, nhà quản trị có chuyên môn sâu tuyệt đối.",
      "QĐ Tập thể dùng khi: Vấn đề mới mẻ phức tạp, chiến lược dài hạn, đòi hỏi sự đồng thuận và cam kết thực thi từ nhiều bộ phận."
    ],
    explanation: `
      <div class="academic-table-wrapper">
        <table class="academic-table">
          <tr><th>Tiêu chí</th><th>Quyết định Cá nhân</th><th>Quyết định Tập thể</th></tr>
          <tr><td><strong>Thời gian ra quyết định</strong></td><td>Rất nhanh, tức thì</td><td>Kéo dài, mất nhiều thời gian hội họp</td></tr>
          <tr><td><strong>Số lượng ý tưởng</strong></td><td>Hạn chế trong tầm hiểu biết cá nhân</td><td>Rất phong phú, sáng tạo, đa dạng</td></tr>
          <tr><td><strong>Độ chính xác</strong></td><td>Dễ sai sót do phiến diện chủ quan</td><td>Được phản biện nhiều góc nhìn, chuẩn xác hơn</td></tr>
          <tr><td><strong>Mức độ chấp nhận thực thi</strong></td><td>Thấp hơn (cấp dưới có tâm lý bị ép)</td><td>Rất cao (nhân viên có cảm giác được làm chủ)</td></tr>
          <tr><td><strong>Trách nhiệm</strong></td><td>Rõ ràng, quy trực tiếp cho người quyết định</td><td>Dễ bị phân tán, mờ nhạt trách nhiệm</td></tr>
          <tr><td><strong>Điều kiện áp dụng hiệu quả nhất</strong></td><td>
            1. Tình huống khủng hoảng, khẩn cấp cần phản ứng ngay.<br>
            2. Vấn đề mang tính thường nhật, đã có quy trình chuẩn.<br>
            3. Người lãnh đạo có kiến thức chuyên môn vượt trội và đủ thông tin.
          </td><td>
            1. Vấn đề chiến lược dài hạn, phức tạp, đa chiều.<br>
            2. Cần nhiều giải pháp sáng tạo đột phá.<br>
            3. Việc thực thi đòi hỏi sự phối hợp chặt chẽ của nhiều phòng ban.
          </td></tr>
        </table>
      </div>
    `,
    example: "Khi phát hiện rò rỉ khí gas trong nhà máy: Quản đốc lập tức bấm chuông sơ tán (QĐ Cá nhân). Khi thảo luận tái cấu trúc mô hình kinh doanh sau dịch Covid: Mở hội thảo toàn thể ban giám đốc và chuyên gia (QĐ Tập thể).",
    quiz: {
      question: "Trong tình huống xảy ra khủng hoảng truyền thông khẩn cấp đe dọa trực tiếp đến uy tín công ty, hình thức ra quyết định nào là phù hợp nhất?",
      options: [
        "A. Tổ chức họp đại hội đồng cổ đông lấy ý kiến",
        "B. Quyết định cá nhân của người lãnh đạo có thẩm quyền để xử lý tức thì",
        "C. Khảo sát kỹ thuật Delphi qua 3 vòng bảng hỏi",
        "D. Trì hoãn chờ đến cuộc họp định kỳ tháng sau"
      ],
      answer: 1,
      explanation: "Tình huống khẩn cấp đòi hỏi phản ứng ngay lập tức để ngăn chặn đám cháy truyền thông, không thể kéo dài họp hành tập thể."
    }
  },
  {
    id: 24,
    chapter: 2,
    stage: 1,
    code: "C2.Q11",
    title: "Thông tin & Thông tin Quản trị",
    question: "Thông tin, thông tin quản trị là gì?",
    keywords: ["Thông tin", "Thông tin quản trị", "Giảm tính bất định", "Cơ sở ra quyết định"],
    summary: [
      "Thông tin: Sự phản ánh các hiện tượng thế giới khách quan, mang lại hiểu biết mới và giảm bớt tính bất định.",
      "Thông tin quản trị: Dữ liệu đã được xử lý và sắp xếp theo logic nhằm phục vụ trực tiếp cho việc ra quyết định và thực hiện các chức năng quản trị."
    ],
    explanation: `
      <p><strong>1. Khái niệm Thông tin:</strong></p>
      <p>Thông tin là sự phản ánh các sự vật, hiện tượng và các quá trình vận động của thế giới khách quan cùng hoạt động của con người; thông tin mang lại cho người nhận những hiểu biết mới, giúp <strong>giảm bớt mức độ bất định</strong> (tính không chắc chắn) trong nhận thức và hành động.</p>
      <p><strong>2. Khái niệm Thông tin quản trị:</strong></p>
      <p>Thông tin quản trị là tập hợp các dữ liệu đã được thu thập, xử lý, phân loại, sắp xếp và lưu trữ theo một logic nhất định, mang ý nghĩa thiết thực nhằm <strong>phục vụ trực tiếp cho việc đưa ra quyết định</strong> và thực hiện các chức năng hoạch định, tổ chức, lãnh đạo, kiểm tra của nhà quản trị.</p>
      <p><em>Vai trò của thông tin quản trị:</em> Được ví như "dòng máu" nuôi dưỡng hệ thần kinh tổ chức; thiếu thông tin, nhà quản trị như người mù lái xe trong đêm tối.</p>
    `,
    example: "Số liệu bán hàng thô cuối ngày sau khi được phần mềm kế toán tổng hợp thành Báo cáo Top 5 sản phẩm bán chạy nhất tuần chính là Thông tin quản trị giúp Trưởng phòng kinh doanh quyết định nhập thêm hàng.",
    quiz: {
      question: "Bản chất cốt lõi của thông tin đối với người ra quyết định là gì?",
      options: [
        "A. Làm tăng thêm tính mơ hồ của hoàn cảnh",
        "B. Mang lại hiểu biết mới và giảm thiểu tính bất định (không chắc chắn)",
        "C. Bắt buộc phải được in ra trên giấy A4",
        "D. Chỉ dành riêng cho nhân viên kế toán"
      ],
      answer: 1,
      explanation: "Thông tin giúp nhà quản trị thấu hiểu hoàn cảnh thực tế, từ đó xóa bỏ sự mơ hồ và giảm thiểu tính bất định để ra quyết định chuẩn xác."
    }
  },
  {
    id: 25,
    chapter: 2,
    stage: 1,
    code: "C2.Q12",
    title: "Phân biệt Thông tin và Dữ liệu",
    question: "Phân biệt thông tin và dữ liệu?",
    keywords: ["Dữ liệu (Data) - Thô sơ", "Thông tin (Information) - Đã xử lý", "Ngữ cảnh", "Ý nghĩa sử dụng"],
    summary: [
      "Dữ liệu: Các con số, ký hiệu thô sơ, chưa qua xử lý, chưa mang ý nghĩa hành động.",
      "Thông tin: Dữ liệu ĐÃ QUA XỬ LÝ, đặt vào ngữ cảnh cụ thể, mang lại ý nghĩa và giá trị ra quyết định.",
      "Công thức: Thông tin = Dữ liệu + Xử lý + Ngữ cảnh + Ý nghĩa."
    ],
    explanation: `
      <div class="academic-table-wrapper">
        <table class="academic-table">
          <tr><th>Tiêu chí</th><th>Dữ liệu (Data)</th><th>Thông tin (Information)</th></tr>
          <tr><td><strong>Bản chất</strong></td><td>Là các con số, sự kiện, ký hiệu, văn bản hoặc hình ảnh thô sơ, chưa qua gia công.</td><td>Là dữ liệu đã được tổng hợp, xử lý, phân tích và đặt vào ngữ cảnh xác định.</td></tr>
          <tr><td><strong>Tính ý nghĩa</strong></td><td>Rời rạc, chưa thể hiện ý nghĩa rõ ràng đối với việc hành động.</td><td>Có ý nghĩa thiết thực, mang thông điệp rõ ràng để định hướng hành động.</td></tr>
          <tr><td><strong>Mối quan hệ</strong></td><td>Là nguyên liệu đầu vào của quá trình xử lý.</td><td>Là sản phẩm đầu ra có giá trị gia tăng sau khi xử lý dữ liệu.</td></tr>
          <tr><td><strong>Ví dụ minh họa</strong></td><td>Các con số rời rạc: <em>39, 40, 41</em></td><td><em>'Nhiệt độ cơ thể bệnh nhân đang là 39.5 độ C (Sốt cao nguy hiểm)'</em></td></tr>
        </table>
      </div>
      <p><em>Quy luật chuyển hóa:</em> Dữ liệu (Thô) -> Quá trình xử lý (Lọc, tính toán, sắp xếp) -> Thông tin (Có ý nghĩa) -> Tri thức (Knowledge) -> Trí tuệ (Wisdom).</p>
    `,
    example: "Danh sách 10.000 dòng ghi nhận từng lượt quẹt thẻ siêu thị là Dữ liệu. Khi phân tích thấy 'Khách mua bỉm thường mua kèm bia vào chiều thứ Sáu' thì đó là Thông tin đắt giá để siêu thị sắp xếp quầy kệ.",
    quiz: {
      question: "Dãy số '100, 200, 150' chưa qua xử lý và chưa đặt vào bất kỳ hoàn cảnh nào được gọi là:",
      options: [
        "A. Thông tin quản trị",
        "B. Dữ liệu (Data)",
        "C. Tri thức kinh doanh",
        "D. Quyết định chiến lược"
      ],
      answer: 1,
      explanation: "Dữ liệu là các con số, ký tự thô sơ chưa qua xử lý và chưa mang ngữ cảnh hay ý nghĩa hành động cụ thể."
    }
  },
  {
    id: 26,
    chapter: 2,
    stage: 1,
    code: "C2.Q13",
    title: "Yêu cầu đối với Thông tin & Yêu cầu đối với Hệ thống thông tin",
    question: "Các yêu cầu đối với thông tin, Yêu cầu đối với hệ thống thông tin?",
    keywords: ["Chính xác", "Kịp thời", "Đầy đủ", "Kinh tế", "Bảo mật", "Tích hợp", "Thân thiện"],
    summary: [
      "Yêu cầu thông tin: Chính xác, Kịp thời, Đầy đủ, Thích hợp (đúng người đúng việc), Kinh tế (chi phí < giá trị), Bảo mật.",
      "Yêu cầu hệ thống: Độ tin cậy cao, Dễ sử dụng, Linh hoạt nâng cấp, Tích hợp đồng bộ dữ liệu, An toàn an ninh mạng."
    ],
    explanation: `
      <p><strong>1. Sáu yêu cầu chuẩn mực đối với thông tin quản trị:</strong></p>
      <ul>
        <li><strong>Tính chính xác:</strong> Thông tin phải phản ánh trung thực thực tế khách quan, không sai sót hay bóp méo số liệu.</li>
        <li><strong>Tính kịp thời:</strong> Được cung cấp đúng thời điểm cần ra quyết định; thông tin chính xác nhưng đến muộn thì vô giá trị.</li>
        <li><strong>Tính đầy đủ:</strong> Chứa đựng đầy đủ các yếu tố cốt lõi cần thiết, không quá thiếu làm lệch lạc, cũng không quá thừa gây nhiễu loạn.</li>
        <li><strong>Tính thích hợp (Có liên quan):</strong> Đúng người, đúng nội dung và đúng cấp quản trị (cấp cao không cần đọc chi tiết từng cái đinh ốc).</li>
        <li><strong>Tính kinh tế:</strong> Chi phí thu thập và xử lý thông tin phải nhỏ hơn giá trị thặng dư mà thông tin đó mang lại.</li>
        <li><strong>Tính bảo mật:</strong> Ngăn chặn sự rò rỉ bí mật kinh doanh và dữ liệu khách hàng sang tay đối thủ.</li>
      </ul>
      <p><strong>2. Yêu cầu đối với Hệ thống thông tin (HTTT):</strong></p>
      <ul>
        <li>Vận hành ổn định, liên tục, có cơ chế sao lưu dự phòng (Disaster recovery).</li>
        <li>Khả năng tích hợp liên thông dữ liệu giữa các bộ phận (Kế toán, Kho, Bán hàng, Nhân sự).</li>
        <li>Giao diện trực quan, dễ thao tác sử dụng cho nhân viên.</li>
        <li>Linh hoạt mở rộng quy mô khi doanh nghiệp phát triển lớn mạnh.</li>
      </ul>
    `,
    example: "Một báo cáo thị trường giá 100 triệu đồng nhưng giúp công ty tránh được một thương vụ đầu tư lỗ 10 tỷ đồng thì báo cáo đó đạt xuất sắc 'Tính kinh tế' và 'Tính kịp thời'.",
    quiz: {
      question: "Thông tin dù tuyệt đối chính xác nhưng được chuyển đến tay nhà quản trị sau khi sự việc đã an bài thì đã đánh mất yêu cầu quan trọng nào?",
      options: [
        "A. Tính chính xác",
        "B. Tính kịp thời",
        "C. Tính khoa học",
        "D. Tính hợp pháp"
      ],
      answer: 1,
      explanation: "Tính kịp thời là linh hồn của thông tin quản trị; thông tin bị trễ hạn sẽ làm mất cơ hội ra quyết định đúng lúc."
    }
  },
  {
    id: 27,
    chapter: 2,
    stage: 1,
    code: "C2.Q14",
    title: "Các loại Hệ thống thông tin trong Doanh nghiệp (TPS, MIS, DSS, EIS, ERP)",
    question: "Các loại hệ thống thông tin trong doanh nghiệp.",
    keywords: ["TPS (Xử lý giao dịch)", "MIS (Thông tin quản trị)", "DSS (Hỗ trợ ra quyết định)", "EIS/ESS (Điều hành cao cấp)", "ERP (Hoạch định tổng thể)"],
    summary: [
      "TPS: Phục vụ cấp cơ sở, ghi chép giao dịch hàng ngày (quẹt mã vạch, hóa đơn).",
      "MIS: Phục vụ cấp trung, báo cáo tóm tắt định kỳ kiểm soát tác nghiệp.",
      "DSS: Phục vụ cấp trung/cao, mô hình toán học giải quyết vấn đề bán cấu trúc.",
      "EIS/ESS: Phục vụ cấp cao (CEO), Dashboard đồ họa bao quát toàn diện.",
      "ERP: Hệ thống tích hợp toàn bộ cơ sở dữ liệu doanh nghiệp."
    ],
    explanation: `
      <p>Hệ thống thông tin doanh nghiệp được phân tầng tương ứng với các cấp bậc quản trị:</p>
      <div class="academic-table-wrapper">
        <table class="academic-table">
          <tr><th>Loại hệ thống</th><th>Đối tượng phục vụ</th><th>Chức năng & Nhiệm vụ chính</th><th>Ví dụ thực tế</th></tr>
          <tr>
            <td><strong>TPS (Transaction Processing System)</strong></td>
            <td>Cấp cơ sở, nhân viên thừa hành</td>
            <td>Ghi chép và xử lý các giao dịch phát sinh hàng ngày (bán hàng, nhập kho, chấm công, rút tiền ATM).</td>
            <td>Hệ thống máy POS quẹt mã vạch tại siêu thị WinMart</td>
          </tr>
          <tr>
            <td><strong>MIS (Management Information System)</strong></td>
            <td>Cấp trung (Trưởng phòng)</td>
            <td>Rút trích dữ liệu từ TPS để lập các báo cáo định kỳ có cấu trúc (báo cáo doanh thu tháng, biến động tồn kho) giúp kiểm soát tác nghiệp.</td>
            <td>Báo cáo so sánh doanh số thực tế so với kế hoạch tháng của phòng kinh doanh</td>
          </tr>
          <tr>
            <td><strong>DSS (Decision Support System)</strong></td>
            <td>Cấp trung & Cấp cao</td>
            <td>Sử dụng các mô hình phân tích dữ liệu phức tạp để hỗ trợ ra các quyết định bán cấu trúc (định giá mới, dự báo rủi ro).</td>
            <td>Hệ thống mô phỏng kịch bản giá vé máy bay linh hoạt theo giờ</td>
          </tr>
          <tr>
            <td><strong>EIS / ESS (Executive Information System)</strong></td>
            <td>Cấp cao nhất (CEO, HĐQT)</td>
            <td>Cung cấp giao diện trực quan dạng <strong>Dashboard đồ họa</strong>, tổng hợp các chỉ số tài chính, thị phần và biến động vĩ mô then chốt.</td>
            <td>Bảng điều khiển của CEO hiển thị dòng tiền theo thời gian thực và tin tức đối thủ</td>
          </tr>
          <tr>
            <td><strong>ERP (Enterprise Resource Planning)</strong></td>
            <td>Toàn bộ doanh nghiệp</td>
            <td>Hệ thống phần mềm khổng lồ <strong>tích hợp toàn diện</strong> tất cả các phân hệ (Kế toán, Sản xuất, Chuỗi cung ứng, Nhân sự) vào một cơ sở dữ liệu duy nhất.</td>
            <td>Phần mềm SAP, Oracle, Odoo</td>
          </tr>
        </table>
      </div>
    `,
    example: "Nhân viên thu ngân tính tiền qua máy POS (TPS) -> Trưởng phòng nhận báo cáo doanh số chi nhánh cuối tháng (MIS) -> Giám đốc dùng hệ thống phân tích thị trường để chọn mở thêm chi nhánh mới (DSS/EIS) -> Toàn bộ chạy trên nền tảng tích hợp SAP (ERP).",
    quiz: {
      question: "Hệ thống phần mềm nào tích hợp toàn bộ các phân hệ chức năng (kế toán, kho, nhân sự, bán hàng) của doanh nghiệp vào một cơ sở dữ liệu dùng chung duy nhất?",
      options: [
        "A. Hệ thống TPS",
        "B. Hệ thống ERP (Enterprise Resource Planning)",
        "C. Phần mềm gõ tiếng Việt Unikey",
        "D. Kỹ thuật Delphi"
      ],
      answer: 1,
      explanation: "ERP là hệ thống hoạch định nguồn lực doanh nghiệp tích hợp toàn diện mọi quy trình kinh doanh vào một cơ sở dữ liệu duy nhất."
    }
  }
];

# Git Zero to Hero: Hướng dẫn thực hành Git

Đây là một dự án đơn giản được tạo ra để giúp bạn thực hành các lệnh Git khác nhau. Dưới đây là danh sách các lệnh Git phổ biến, từ cơ bản đến nâng cao, mà bạn có thể thử nghiệm trong dự án này.
Thực hành Git cơ bản.

---

## ⚙️ Thiết lập ban đầu (Initial Setup)

Đây là những việc bạn nên làm đầu tiên sau khi cài đặt Git.

### `git config`

- **Công dụng:** Thiết lập các biến cấu hình cho Git, quan trọng nhất là thông tin người dùng của bạn. Thông tin này sẽ được gắn vào mỗi commit bạn tạo.
- **Cách dùng:**

  ```bash
  # Thiết lập tên của bạn
  git config --global user.name "Tên Của Bạn"

  # Thiết lập email của bạn
  git config --global user.email "emailcuaban@example.com"

  # Xem danh sách cấu hình
  git config --list
  ```

---

## 📚 Các lệnh Git cơ bản

Đây là những lệnh bạn sẽ sử dụng hàng ngày.

### `git init`

- **Công dụng:** Khởi tạo một kho lưu trữ Git mới trong thư mục hiện tại.
- **Cách dùng:**
  ```bash
  git init
  ```

### `git clone`

- **Công dụng:** Tạo một bản sao (clone) của một kho lưu trữ từ xa về máy của bạn.
- **Cách dùng:**
  ```bash
  git clone <url_kho_luu_tru>
  ```

### `git status`

- **Công dụng:** Hiển thị trạng thái của các tệp trong thư mục làm việc và khu vực dàn dựng (staging area).
- **Cách dùng:**
  ```bash
  git status
  ```

### `git add`

- **Công dụng:** Thêm các thay đổi của tệp vào khu vực dàn dựng (staging area), chuẩn bị cho việc commit.
- **Cách dùng:**

  ```bash
  # Thêm một tệp cụ thể
  git add <ten_file>

  # Thêm tất cả các tệp đã thay đổi
  git add .
  ```

### `git commit`

- **Công dụng:** Lưu các thay đổi từ khu vực dàn dựng vào lịch sử của kho lưu trữ.
- **Cách dùng:**
  ```bash
  git commit -m "Nội dung thông điệp commit"
  ```

### `git log`

- **Công dụng:** Hiển thị lịch sử các commit của dự án.
- **Cách dùng:**

  ```bash
  git log

  # Hiển thị log một cách ngắn gọn
  git log --oneline
  ```

### `git show`

- **Công dụng:** Hiển thị thông tin chi tiết về một đối tượng Git bất kỳ (commit, tag, etc.), bao gồm cả nội dung thay đổi.
- **Cách dùng:**

  ```bash
  # Hiển thị chi tiết commit gần nhất
  git show

  # Hiển thị chi tiết một commit cụ thể
  git show <ma_commit>
  ```

### `git diff`

- **Công dụng:** Hiển thị sự khác biệt giữa các trạng thái khác nhau.
- **Cách dùng:**

  ```bash
  # So sánh thay đổi trong thư mục làm việc với staging area
  git diff

  # So sánh staging area với commit cuối cùng
  git diff --staged
  ```

### `git mv`

- **Công dụng:** Di chuyển hoặc đổi tên một tệp, thư mục. Lệnh này tương đương với việc bạn đổi tên tệp rồi chạy `git add` cho cả tên cũ (để xóa) và tên mới.
- **Cách dùng:**
  ```bash
  git mv <ten_cu> <ten_moi>
  ```

### `git rm`

- **Công dụng:** Xóa tệp khỏi thư mục làm việc và cả staging area.
- **Cách dùng:**

  ```bash
  # Xóa tệp và đưa thay đổi vào staging
  git rm <ten_file>

  # Chỉ xóa khỏi staging area, giữ lại tệp trong thư mục làm việc
  git rm --cached <ten_file>
  ```

---

## 📄 Tệp `.gitignore`

- **Công dụng:** Đây không phải là lệnh mà là một tệp cấu hình đặc biệt. Bạn liệt kê các tệp hoặc thư mục mà bạn muốn Git **bỏ qua** và không theo dõi. Điều này rất hữu ích cho các tệp do máy tạo ra (build artifacts), tệp log, hoặc các tệp chứa thông tin nhạy cảm.
- **Cách dùng:**

  1. Tạo một tệp có tên là `.gitignore` ở thư mục gốc của dự án.
  2. Thêm tên tệp, thư mục, hoặc các mẫu (patterns) vào đó.

  ```gitignore
  # Bỏ qua tất cả các tệp .log
  *.log

  # Bỏ qua thư mục node_modules
  /node_modules

  # Bỏ qua tệp cấu hình môi trường
  .env
  ```

---

## 🌿 Branching và Merging

Branching cho phép bạn phát triển các tính năng một cách độc lập.

### `git branch`

- **Công dụng:** Quản lý các nhánh (branch).
- **Cách dùng:**

  ```bash
  # Liệt kê tất cả các nhánh
  git branch

  # Tạo một nhánh mới
  git branch <ten_nhanh>
  ```

### `git checkout`

- **Công dụng:** Chuyển đổi giữa các nhánh hoặc khôi phục các tệp.
- **Cách dùng:**

  ```bash
  # Chuyển sang một nhánh đã tồn tại
  git checkout <ten_nhanh>

  # Tạo một nhánh mới và chuyển sang nhánh đó ngay lập tức
  git checkout -b <ten_nhanh_moi>
  ```

### `git merge`

- **Công dụng:** Gộp lịch sử của một nhánh khác vào nhánh hiện tại.
- **Cách dùng:**
  ```bash
  git merge <ten_nhanh_tinh_nang>
  ```

---

## ☁️ Làm việc với Kho lưu trữ từ xa (Remotes)

Đây là cách bạn tương tác với các kho lưu trữ trên các máy chủ như GitHub.

### `git remote`

- **Công dụng:** Quản lý các kết nối đến kho lưu trữ từ xa.
- **Cách dùng:**
  ```bash
  # Thêm một remote mới
  git remote add <ten_remote> <url_kho_luu_tru>
  ```

### `git push`

- **Công dụng:** Đẩy các commit từ kho lưu trữ cục bộ của bạn lên kho lưu trữ từ xa.
- **Cách dùng:**
  ```bash
  git push <ten_remote> <ten_nhanh>
  ```

### `git pull`

- **Công dụng:** Lấy các thay đổi mới nhất từ kho lưu trữ từ xa và gộp chúng vào nhánh hiện tại.
- **Cách dùng:**
  ```bash
  git pull <ten_remote> <ten_nhanh>
  ```

### `git fetch`

- **Công dụng:** Lấy các thay đổi mới nhất từ kho lưu trữ từ xa nhưng không tự động gộp chúng.
- **Cách dùng:**
  ```bash
  git fetch <ten_remote>
  ```

---

## 🚀 Các lệnh Git nâng cao

Những lệnh này cung cấp nhiều quyền kiểm soát hơn đối với lịch sử Git của bạn.

### `git rebase`

- **Công dụng:** Áp dụng lại các commit từ một nhánh lên trên một nhánh khác. Nó giúp tạo ra một lịch sử commit tuyến tính và sạch sẽ hơn.
- **Cách dùng:**
  ```bash
  # Đứng ở nhánh tính năng, rebase lên nhánh main
  git rebase main
  ```
- **Rebase Tương tác (`git rebase -i`):**
  - **Công dụng:** Đây là một chế độ cực kỳ mạnh mẽ của `rebase`, cho phép bạn chỉnh sửa các commit trong lịch sử: gộp (squash), sửa đổi thông điệp (reword), xóa (drop), sắp xếp lại các commit.
  - **Cách dùng:**
    ```bash
    # Bắt đầu một phiên rebase tương tác cho 3 commit gần nhất
    git rebase -i HEAD~3
    ```
    Sau khi chạy lệnh, một trình soạn thảo văn bản sẽ mở ra, cho phép bạn chọn hành động cho từng commit.

### `git reset`

- **Công dụng:** Đưa trạng thái của dự án về một commit cụ thể. **Cẩn thận:** có thể làm mất dữ liệu.
- **Cách dùng:**

  ```bash
  # Đưa HEAD về commit trước đó, giữ lại thay đổi trong thư mục làm việc
  git reset HEAD~1

  # Hủy bỏ hoàn toàn các thay đổi của commit gần nhất
  git reset --hard HEAD~1
  ```

### `git revert`

- **Công dụng:** Tạo một commit mới để hoàn tác lại các thay đổi của một commit trước đó. An toàn hơn `git reset` trên các nhánh đã chia sẻ.
- **Cách dùng:**
  ```bash
  git revert <ma_commit_can_hoan_tac>
  ```

### `git stash`

- **Công dụng:** Tạm thời cất giữ các thay đổi chưa được commit.
- **Cách dùng:**

  ```bash
  # Cất giữ các thay đổi
  git stash

  # Áp dụng lại thay đổi đã cất giữ
  git stash pop
  ```

### `git cherry-pick`

- **Công dụng:** Chọn và áp dụng một commit cụ thể từ một nhánh khác sang nhánh hiện tại.
- **Cách dùng:**
  ```bash
  git cherry-pick <ma_commit_can_lay>
  ```

### `git tag`

- **Công dụng:** Đánh dấu các commit quan trọng, thường được sử dụng để đánh dấu các phiên bản phát hành.
- **Cách dùng:**

  ```bash
  # Tạo một tag để đánh dấu phiên bản
  git tag -a v1.0 -m "Phiên bản 1.0"

  # Đẩy tag lên remote
  git push origin v1.0
  ```

<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <form @submit.prevent>
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input type="text" class="form-control" id="title" />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <textarea
          class="form-control"
          name="content"
          id="content"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div class="pt-4">
        <button type="button" class="btn btn-sm btn-outline-danger me-2">
          취소
        </button>
        <button type="button" class="btn btn-sm btn-outline-primary">
          저장
        </button>
      </div>
    </form>
  </div>
</template>
<script></script>

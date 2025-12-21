<template>
    <div 
        class="bg-white border border-[#ebedf0] rounded-[28px] p-4 flex gap-4 items-center cursor-pointer relative group"
    >
        <!-- Branch Image -->
        <div class="w-32 h-32 bg-white rounded-[20px] overflow-hidden shadow-[0px_30px_50px_5px_rgba(39,48,56,0.06)] flex-shrink-0">
            <div class="w-full h-full skeleton rounded-20px"></div>
        </div>

        <!-- Branch Details -->
        <div class="flex-1 flex flex-col justify-between h-full min-h-[128px]">
            <div class="flex flex-col gap-1 mb-4">
                <h3 class="h-8 w-full skeleton rounded-xl"></h3>
                <div class="flex gap-1 items-center">
                    <i class="w-5 h-5 skeleton rounded-md" />
                    <p class="h-5 w-1/2 skeleton rounded-md"></p>
                </div>
            </div>

            <div class="flex items-center justify-between w-full">
                <div class="flex gap-2 items-center px-3 py-2 border border-gray-2 rounded-full">
                    <div class="flex gap-1 items-center font-medium text-sm leading-[1.3] text-[#676869]">
                        <i class="skeleton w-4 h-4 rounded" />
                        <span class="skeleton rounded w-14 h-4"></span>
                    </div>
                    <div class="w-px h-4 bg-[#dfe0e1] rounded-[50px]"></div>
                    <div class="flex gap-1 items-center font-medium text-sm leading-[1.3] text-[#676869]">
                        <i class="skeleton w-4 h-4 rounded" />
                        <span class="skeleton rounded w-14 h-4"></span>
                    </div>
                </div>
                <div 
                    class="rounded-2xl px-1 py-1 flex items-center justify-center w-8 h-8 skeleton"
                />
            </div>
        </div>
    </div>
</template>

﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace api.Migrations
{
    [DbContext(typeof(PlayerContext))]
    [Migration("20231017103709_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.23");

            modelBuilder.Entity("Player", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Asset")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("PlayerName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("RealName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Players");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Asset = "Foghammer Lead",
                            PlayerName = "Dreamlurk The Unstoppable",
                            RealName = "Brianna Forbes"
                        },
                        new
                        {
                            Id = 2,
                            Asset = "Secret Glowquake Gold",
                            PlayerName = "Crystaldash",
                            RealName = "Darcy Candice Ball"
                        },
                        new
                        {
                            Id = 3,
                            Asset = "Valkyries' Opal Adamant",
                            PlayerName = "Seekvenom The Mystic",
                            RealName = "Elva Becky Hammond"
                        },
                        new
                        {
                            Id = 4,
                            Asset = "Jewelevil Bronze Of Goddesses",
                            PlayerName = "Coincurse The Ghoul",
                            RealName = "Enid Rose"
                        },
                        new
                        {
                            Id = 5,
                            Asset = "Yellow Orichalcum Of Paladins",
                            PlayerName = "Skulldart",
                            RealName = "Esmeralda Carrillo"
                        },
                        new
                        {
                            Id = 6,
                            Asset = "Shifting Rainshadow Iron",
                            PlayerName = "Speedsoul",
                            RealName = "Hillary Gibbs"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}

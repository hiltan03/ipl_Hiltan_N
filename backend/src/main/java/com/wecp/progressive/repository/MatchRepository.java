package com.wecp.progressive.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.wecp.progressive.entity.Match;
import java.util.List;

@Repository
public interface MatchRepository extends JpaRepository<Match, Integer>
{
    public Match findByMatchId(int matchId);
    public List<Match> findAllByStatus(String status);

    @Modifying
    @Transactional
    @Query("Delete from Match m WHERE m.firstTeamId = :teamId OR m.secondTeamId = :teamId")
    public void deleteByTeamId(@Param("teamId") int teamId);
}
